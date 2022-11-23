import React, { useCallback, useContext, useEffect, useState } from "react"
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  animated,
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
  createIconSetFromFontello,
} from "@expo/vector-icons"
import { Audio, InterruptionModeIOS } from "expo-av"
import { Sound } from "expo-av/build/Audio"
import { Foundation } from "@expo/vector-icons"
import { AppContext } from "../../AppContext"

import { API, graphqlOperation } from "aws-amplify"
// import { getSongToPlay } from "../../src/graphql/queries"
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
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  State,
  useProgress,
} from "react-native-track-player"
import { getArtist } from "../../src/graphql/queries"

export type PlayerWidgetProps = {
  song: Song
}

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3

export default function PlayerWidget(props: PlayerWidgetProps) {
  const {
    songId,
    songsOfAlbum,
    setSongId,
    setSongsOfAlbum,
    hasTrack,
    setHasTrackState,
  } = useContext(AppContext)

  const progress = useProgress()

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

  const translateY = useSharedValue(0)
  const translateX = useSharedValue(0)
  const marginVertical = useSharedValue(10)
  const isRemoveTrack = useSharedValue(false)

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
            if (isFinished) {
              console.log("isfinished:", isFinished)
              console.log("is remove track: ", isRemoveTrack.value)
              isRemoveTrack.value = true
            }
          }
        )

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
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD * 1.5 ? 0 : 1
    )
    ;("worklet")
    return {
      transform: [{ translateX: translateX.value }],
      opacity,
    }
  })

  useEffect(() => {
    const eraseTrackAndQueue = async () => {
      setSong(null)
      await TrackPlayer.pause()
      await TrackPlayer.reset()
      setHasTrackState(false)
      setPlaying(true)
    }
    if (isRemoveTrack) {
      console.log("erase procressing")
      eraseTrackAndQueue()
    }
  }, [isRemoveTrack.value])

  useEffect(() => {
    isRemoveTrack.value = false
    translateX.value = 0
  }, [song])

  useEffect(() => {
    const getCurrentTrack = async () => {
      if (
        (await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack())) !==
        null
      ) {
        setSong(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()))
      }
    }

    getCurrentTrack()
  }, [progress.duration])

  const onPlayPausePressed = async () => {
    // console.log(typeof (await TrackPlayer.getState()))
    const playbackState = await TrackPlayer.getState()
    if (playbackState.toString() === "playing") {
      setPlaying(false)
      await TrackPlayer.pause()
    } else {
      setPlaying(true)
      await TrackPlayer.play()
    }
  }

  const onNextSongPressed = async () => {
    let nextTrack = await TrackPlayer.getTrack(
      (await TrackPlayer.getCurrentTrack()) + 1
    )
    if (nextTrack === null) {
      setSong(await TrackPlayer.getTrack(0))
      await TrackPlayer.skip(0, 0)
    } else {
      setSong(nextTrack)
      await TrackPlayer.skipToNext()
    }
  }

  const onPrevSongPressed = async () => {
    if ((await TrackPlayer.getCurrentTrack()) === 0) return
    setSong(
      await TrackPlayer.getTrack((await TrackPlayer.getCurrentTrack()) - 1)
    )
    await TrackPlayer.skipToPrevious()
  }

  const onReplayPressed = async () => {
    setReplay(!isReplay)
  }

  useEffect(() => {
    const findTheNextSong = async () => {
      console.log(progress.position, progress.duration)
      if (progress.duration - progress.position < 2) {
        // console.log("SONG ENDED.")
        if (isMixed) {
          const queue = await TrackPlayer.getQueue()
          const queueLength = queue.length
          await TrackPlayer.skip(Math.random() * queueLength, 0)
        }
      }
    }
    findTheNextSong()
  }, [progress.position])

  const getProgress = () => {
    const positionPercent = progress.position / progress.duration
    if (positionPercent === NaN) return 0
    return positionPercent
  }

  const getPositionInMinutes = () => {
    const minutes = Math.floor(progress.position / 60)
    const sec = Math.floor(progress.position - minutes * 60)
    return `0${minutes}:${sec / 10 < 1 ? `0${sec}` : sec}`
  }

  const getDurationInMinutes = () => {
    const minutes = Math.floor(progress.duration / 60)
    const sec = Math.floor(progress.duration - minutes * 60)
    return `0${minutes}:${sec / 10 < 1 ? `0${sec}` : sec}`
  }

  if (song === null || hasTrack === false || isRemoveTrack.value) {
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
                width: `${getProgress() * 93}%`,
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
                source={{ uri: song.artwork }}
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
                  <Text style={styles.artist}>{song.artist.name}</Text>
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
            source={{ uri: song.artwork }}
            style={stylesForFullScreen.image}
          ></Image>
        </View>

        {/* song and artist view */}
        <View style={stylesForFullScreen.songAndArtist}>
          <Text style={stylesForFullScreen.title}>{song.title}</Text>
          <Text style={stylesForFullScreen.artist}>{song.artist.name}</Text>
        </View>

        {/* progress bar */}
        <View style={stylesForFullScreen.progressBar}>
          <View style={stylesForFullScreen.progressBarLine}>
            <View
              style={{
                height: 6,
                width: `${getProgress() * 100}%`,
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
              value={getProgress()}
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#ffffff"
              onSlidingStart={async () => {
                await TrackPlayer.pause()
              }}
              onSlidingComplete={async (value) => {
                await sound?.setPositionAsync(Math.floor(value * duration))
                setPosition(Math.floor(value * duration))
                await TrackPlayer.seekTo(value * progress.duration)
                await TrackPlayer.play()

                //  await moveAudio(context, value)
                // setCurrentPosition(0)
              }}
            />
          )}

          <View style={stylesForFullScreen.progressBarTime}>
            <Text style={{ color: "white" }}>{getPositionInMinutes()}</Text>
            <Text style={{ color: "white" }}>{getDurationInMinutes()}</Text>
          </View>
        </View>

        {/* controller */}
        <View style={stylesForFullScreen.controller}>
          <TouchableOpacity
            onPress={() => {
              setMixed(!isMixed)
            }}
          >
            <MaterialCommunityIcons
              name="shuffle"
              size={24}
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
