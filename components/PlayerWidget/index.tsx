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
import {
  getArtist,
  getUser,
  getLikedSongOfUser,
} from "../../src/graphql/queries"
import {
  createUserSongsFavorite,
  deleteUserSongsFavorite,
  updateUser,
} from "../../src/graphql/mutations"

export type PlayerWidgetProps = {
  song: Song
}

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3

export default function PlayerWidget(props: PlayerWidgetProps) {
  const {
    userId,
    hasTrack,
    setHasTrackState,
    sleepTimer,
    setSleepTimer,
    createdTimer,
    setCreatedTimer,
  } = useContext(AppContext)

  const progress = useProgress()

  const [isLiked, setLikedState] = useState(false)
  const [song, setSong] = useState(null)
  const [sound, setSound] = useState<Sound | null>(null)
  const [isPlaying, setPlaying] = useState<boolean>(true)
  const [isMixed, setMixed] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState<number | null>(null)
  const [fullScreen, setFullScreen] = useState(false)
  const [isReplay, setReplay] = useState(false)
  const [listOfFavoriteSongs, setListOfFavoriteSongs] = useState([])
  const [isRated, setRatedState] = useState(false)

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
      eraseTrackAndQueue()
    }
  }, [isRemoveTrack.value])

  useEffect(() => {
    isRemoveTrack.value = false
    translateX.value = 0

    const checkIfThisSongIsLikedByCurrentUser = async (songs) => {
      setListOfFavoriteSongs(songs)
      var songsId = songs.map((song) => {
        return song.song.id
      })

      try {
        var currentSong = await TrackPlayer.getTrack(
          (await TrackPlayer.getCurrentTrack()) || 0
        )
        if (currentSong) {
          songsId.includes(currentSong.id)
            ? setLikedState(true)
            : setLikedState(false)
        } else {
          setLikedState(false)
        }
      } catch (e) {
        console.log("get current song from player widget", e)
      }
    }

    // console.log(userId)

    const checkUserLikedThisSong = async () => {
      try {
        console.log(userId)
        const data = await API.graphql(
          graphqlOperation(getLikedSongOfUser, { id: userId })
        )

        checkIfThisSongIsLikedByCurrentUser(
          data.data.getUser.favoriteSongs.items
        )
      } catch (e) {
        console.log("CHECK USER LIKE SONG", e)
      }
    }
    if (song) {
      checkUserLikedThisSong()
    }
    setPlaying(true)
    setRatedState(false)
    setFullScreen(false)
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

    const now = Date.now()

    if (createdTimer && sleepTimer && sleepTimer < now) {
      setCreatedTimer(false)
      TrackPlayer.pause()
    }

    getCurrentTrack()
  }, [progress.duration])

  const onPlayPausePressed = async () => {
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

  const onLikedSongPressed = async () => {
    if (isLiked) {
      var songsId = listOfFavoriteSongs.map((song) => {
        return song.song.id
      })

      var index = songsId.indexOf(song.id)
      var favoriteSongId = listOfFavoriteSongs[index].id
      console.log(listOfFavoriteSongs)

      try {
        await API.graphql(
          graphqlOperation(deleteUserSongsFavorite, {
            input: {
              id: favoriteSongId,
            },
          })
        )
        setLikedState(false)
      } catch (e) {
        console.log("liked song pressed", e)
      }
    } else {
      try {
        await API.graphql(
          graphqlOperation(createUserSongsFavorite, {
            input: {
              songUserFavoritesId: song.id,
              userFavoriteSongsId: userId,
            },
          })
        )
        setLikedState(true)
      } catch (e) {
        console.log("liked song pressed", e)
      }
    }
  }

  useEffect(() => {
    const findTheNextSong = async () => {
      if (progress.duration - progress.position < 2) {
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
    if (Number.isNaN(positionPercent)) return 0
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

  const onRatingSongPressed = async (score: number) => {
    if (isRated === false) {
      console.log("Rating song score: ", score)
      try {
      } catch (err) {
        console.log("Error when RATING song", err)
      }
      setRatedState(true)
    }
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
                width: `${getProgress() * 93 || 0}%`,
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
                <TouchableOpacity onPress={onLikedSongPressed}>
                  <FontAwesome
                    name={isLiked ? "heart" : "heart-o"}
                    size={16}
                    color="white"
                    style={{ padding: 10 }}
                  />
                </TouchableOpacity>

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
    // FULL SCREEN
    //

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
              value={getProgress() || 0}
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
          <TouchableOpacity onPress={onLikedSongPressed}>
            <FontAwesome
              name={isLiked ? "heart" : "heart-o"}
              size={16}
              color="white"
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="cloud-download-outline"
            size={24}
            color="#ccc"
          />
        </View>

        {isRated === false && (
          <View style={stylesForFullScreen.ratingSongField}>
            <View>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  marginBottom: 5,
                }}
              >
                Rate the song if you like it!
              </Text>
            </View>
            <View style={stylesForFullScreen.listScore}>
              <TouchableOpacity
                onPress={() => {
                  onRatingSongPressed(1)
                }}
              >
                <View style={stylesForFullScreen.scoreBorder}>
                  <Text style={{ color: "white" }}>1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onRatingSongPressed(2)
                }}
              >
                <View style={stylesForFullScreen.scoreBorder}>
                  <Text style={{ color: "white" }}>2</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onRatingSongPressed(3)
                }}
              >
                <View style={stylesForFullScreen.scoreBorder}>
                  <Text style={{ color: "white" }}>3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onRatingSongPressed(4)
                }}
              >
                <View style={stylesForFullScreen.scoreBorder}>
                  <Text style={{ color: "white" }}>4</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onRatingSongPressed(5)
                }}
              >
                <View style={stylesForFullScreen.scoreBorder}>
                  <Text style={{ color: "white" }}>5</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
