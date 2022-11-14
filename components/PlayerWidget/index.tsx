import React, { useCallback, useContext, useEffect, useState } from "react"
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native"
import styles from "./styles"
import stylesForFullScreen from "./stylesForFullScreen"
import { Song } from "../../types"
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { Audio, InterruptionModeIOS } from "expo-av"
import { Sound } from "expo-av/build/Audio"
import { Foundation } from "@expo/vector-icons"
import { AppContext } from "../../AppContext"

import { API, graphqlOperation } from "aws-amplify"
import { getSongToPlay } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { useNavigation } from "@react-navigation/native"
import Slider from "@react-native-community/slider"

import * as RootNavigation from "../../RootNavigation"
import { getCustomTabsSupportingBrowsersAsync } from "expo-web-browser"

import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler"
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated"

export type PlayerWidgetProps = {
  song: Song
}

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3

export default function PlayerWidget(props: PlayerWidgetProps) {
  const [song, setSong] = useState(null)
  const [sound, setSound] = useState<Sound | null>(null)
  const [isPlaying, setPlaying] = useState<boolean>(true)
  const [isMixed, setMixed] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState<number | null>(null)
  const [fullScreen, setFullScreen] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [id, setId] = useState<string | null>("")
  const [isReplay, setReplay] = useState(false)

  const { songId, songsOfAlbum, setSongId, setSongsOfAlbum } =
    useContext(AppContext)

  const translateY = useSharedValue(0)
  const translateX = useSharedValue(0)
  const marginVertical = useSharedValue(10)

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX
    },
    onEnd: () => {
      const shouldErased = translateX.value < TRANSLATE_X_THRESHOLD

      if (shouldErased) {
        translateX.value = withTiming(
          -SCREEN_WIDTH,
          undefined,
          (isFinished) => {
            runOnJS(setId)(null)
          }
        )
        translateX.value = 0

        // setDuration(0)
        // setPosition(null)
        // setCurrentPosition(0)
        // runOnJS(setSongId)("")
      } else {
        translateX.value = withTiming(0)
      }
    },
  })

  const rStyle = useAnimatedStyle(() => {
    "worklet"
    return {
      transform: [{ translateX: translateX.value }],
    }
  })

  useEffect(() => {
    if (song) {
      playCurrentSong()
    }
  }, [song])

  useEffect(() => {
    //fetch song data
    const fetchSong = async () => {
      try {
        const songData = await API.graphql(
          graphqlOperation(getSongToPlay, { id: songId })
        )
        setSong(songData.data.getSong)
      } catch (e) {
        console.log(e)
      }
    }
    fetchSong()
    setPlaying(true)
    setId(songId)
  }, [songId])

  useEffect(() => {
    // const unloadSound = async () => {
    //   await sound?.unloadAsync()
    // }
    if (id === null) {
      // unloadSound()
      setSongId("")
      setSong(null)
      setPlaying(false)
      sound?.pauseAsync()
      setDuration(0)
      setPosition(null)
      setCurrentPosition(0)
    }
  }, [id])

  const playCurrentSong = async () => {
    if (sound) {
      sound.unloadAsync()
    }
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    })

    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: song.songUri },
      { shouldPlay: true },
      onPlayBackStatusUpdate
    )
    setSound(playbackObject)
  }

  const onPlayBackStatusUpdate = (status) => {
    setPlaying(status.isPlaying)
    setDuration(status.durationMillis)
    setPosition(status.positionMillis)
  }

  const onPlayPausePressed = async () => {
    if (!sound) {
      return
    }
    if (isPlaying) {
      await sound.pauseAsync()
    } else {
      await sound.playAsync()
    }
  }

  const onNextSongPressed = async () => {
    songsOfAlbum.forEach((item) => {
      if (item === songId) {
        if (songsOfAlbum.indexOf(item) === songsOfAlbum.length - 1) {
          setSongId(songsOfAlbum[0])
        } else {
          setSongId(songsOfAlbum[songsOfAlbum.indexOf(item) + 1])
        }
      }
    })
  }

  const onPrevSongPressed = async () => {
    songsOfAlbum.forEach((item) => {
      if (item === songId) {
        if (songsOfAlbum.indexOf(item) === 0) {
          setSongId(songsOfAlbum[songsOfAlbum.length - 1])
        } else {
          setSongId(songsOfAlbum[songsOfAlbum.indexOf(item) - 1])
        }
      }
    })
  }

  const onReplayPressed = async () => {
    setReplay(!isReplay)
  }

  useEffect(() => {
    if (position === undefined) return

    if (position === duration) {
      if (isReplay) {
        sound?.replayAsync()
      } else if (isMixed) {
        setSongId(songsOfAlbum[Math.floor(Math.random() * songsOfAlbum.length)])
      } else {
        onNextSongPressed()
      }
    }
  }, [position])

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0
    } else if (duration === undefined) {
      return 0
    }
    return Math.round((position / duration) * 920) / 10
  }

  if (!song) {
    return null
  }

  return !fullScreen ? (
    <GestureHandlerRootView
      key={`GHRV}`}
      style={{
        flex: 1,
        position: "absolute",
        height: 100,
        bottom: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0,
      }}
    >
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.wrapper, rStyle]}>
          <View
            style={[
              {
                height: 1,
                width: `${getProgress()}%`,
                backgroundColor: "#fae2c8",
                marginLeft: "3.5%",
              },
              {
                elevation: 20,
                shadowColor: "#000",
              },
            ]}
          ></View>
          <View style={styles.container}>
            <TouchableWithoutFeedback
              onPress={() => {
                setFullScreen(true)
              }}
            >
              <LinearGradient
                // Background Linear Gradient
                colors={[constants.colors.primaryColor, "#202020"]}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderRadius: 6,
                }}
                start={[0, 0]}
                end={[1, 1]}
                location={[0.25, 0.4, 1]}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setFullScreen(true)
              }}
            >
              <Image
                source={{ uri: song.imageUri }}
                style={[styles.image, styles.elevation]}
              ></Image>
            </TouchableWithoutFeedback>
            <View style={styles.rightContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setFullScreen(true)
                }}
              >
                <View>
                  <Text style={styles.title}>{song.title}</Text>
                  <Text style={styles.artist}>
                    {song.artist && song.artist.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <View style={styles.controllerRight}>
                <TouchableOpacity onPress={onPlayPausePressed}>
                  <FontAwesome
                    name={!isPlaying ? "play" : "pause"}
                    size={16}
                    color="white"
                    style={{ padding: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onNextSongPressed}>
                  <Entypo
                    name="controller-next"
                    size={22}
                    color="#9c9c9c"
                    style={{ padding: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  ) : (
    <View style={stylesForFullScreen.wrapper}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#828282", "#000"]}
        style={{
          width: "120%",
          height: "80%",
          position: "absolute",
        }}
      />
      <View style={stylesForFullScreen.container}>
        <View style={stylesForFullScreen.topController}>
          <View style={stylesForFullScreen.topLeft}>
            <TouchableOpacity
              onPress={() => {
                setFullScreen(false)
              }}
            >
              <AntDesign name="down" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={stylesForFullScreen.topRight}>
            <AntDesign name="sharealt" size={20} color="white" />
            <FontAwesome
              name="ellipsis-v"
              size={20}
              color="white"
              style={{ marginLeft: 18 }}
            />
          </View>
        </View>
        <View style={stylesForFullScreen.imageView}>
          <Image
            source={{ uri: song.imageUri }}
            style={stylesForFullScreen.image}
          ></Image>
        </View>

        {/* song and artist view */}
        <View style={stylesForFullScreen.songAndArtist}>
          <Text style={stylesForFullScreen.title}>{song.title}</Text>
          <Text style={stylesForFullScreen.artist}>
            {song.artist && song.artist.name}
          </Text>
        </View>

        {/* progress bar */}
        <View style={stylesForFullScreen.progressBar}>
          <View style={stylesForFullScreen.progressBarLine}>
            <View
              style={{
                height: 6,
                width: `${(getProgress() * 100) / 92}%`,
                backgroundColor: "#fff",
                position: "absolute",
                borderRadius: 5,
                top: -1,
                elevation: 1,
              }}
            ></View>
          </View>
          {song && (
            <Slider
              style={{ width: "99%", height: 5, position: "absolute", top: 0 }}
              minimumValue={0}
              maximumValue={1}
              value={getProgress() / 92 || 0}
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#ffffff"
              onValueChange={(value) => {
                setCurrentPosition(value * duration)
              }}
              onSlidingStart={async () => {
                // if (!context.isPlaying) return
                // try {
                //   await pause(context.playbackObj)
                // } catch (error) {
                //   console.log("error inside onSlidingStart callback", error)
                // }
              }}
              onSlidingComplete={async (value) => {
                await sound?.setPositionAsync(Math.floor(value * duration))
                setPosition(Math.floor(value * duration))
                //  await moveAudio(context, value)
                // setCurrentPosition(0)
              }}
            />
          )}

          <View style={stylesForFullScreen.progressBarTime}>
            <Text style={{ color: "white" }}>
              {position && Math.floor((position / 1000 / 60) << 0)}:
              {position && Math.floor((position / 1000) % 60)}
            </Text>
            <Text style={{ color: "white" }}>
              {duration && Math.floor((duration / 1000 / 60) << 0)}:
              {duration && Math.floor((duration / 1000) % 60)}
            </Text>
          </View>
        </View>

        {/* controller */}
        <View style={stylesForFullScreen.controller}>
          <TouchableOpacity
            onPress={() => {
              setMixed(true)
            }}
          >
            <Fontisto
              name="arrow-swap"
              size={20}
              color={isMixed ? "white" : "#636363"}
            />
          </TouchableOpacity>
          <View style={stylesForFullScreen.centerController}>
            <TouchableOpacity onPress={onPrevSongPressed}>
              <MaterialCommunityIcons
                name="skip-previous"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlayPausePressed}>
              <AntDesign
                name={!isPlaying ? "play" : "pausecircle"}
                size={48}
                color="white"
                style={{ marginLeft: 14, marginRight: 14 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onNextSongPressed}>
              <MaterialCommunityIcons
                name="skip-next"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onReplayPressed}>
            <MaterialIcons
              name="replay"
              size={24}
              color={isReplay ? "white" : "#636363"}
            />
          </TouchableOpacity>
        </View>

        {/* download song */}
        <View style={stylesForFullScreen.footer}>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={24}
            color="#ccc"
          />
          <MaterialCommunityIcons
            name="cloud-download-outline"
            size={24}
            color="#ccc"
          />
        </View>
      </View>
    </View>
  )
}
