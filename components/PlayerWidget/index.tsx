import React, { useContext, useEffect, useState } from "react"
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native"
import styles from "./styles"
import { Song } from "../../types"
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons"
import { Audio, InterruptionModeIOS } from "expo-av"
import { Sound } from "expo-av/build/Audio"
import { Foundation } from "@expo/vector-icons"
import { AppContext } from "../../AppContext"

import { API, graphqlOperation } from "aws-amplify"
import { getSongToPlay } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { useNavigation } from "@react-navigation/native"

export type PlayerWidgetProps = {
  song: Song
}

export default function PlayerWidget(props: PlayerWidgetProps) {
  const [song, setSong] = useState(null)
  const [sound, setSound] = useState<Sound | null>(null)
  const [isPlaying, setPlaying] = useState<boolean>(true)
  const [duration, setDuration] = useState<number | null>(null)
  const [position, setPosition] = useState<number | null>(null)

  const { songId, songsOfAlbum, setSongId } = useContext(AppContext)

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
  }, [songId])

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
      { shouldPlay: isPlaying },
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

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0
    }

    return Math.round((position / duration) * 920) / 10
  }

  if (!song) {
    return null
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        <View
          style={{
            height: 1,
            width: `${getProgress()}%`,
            backgroundColor: "#fae2c8",
            marginLeft: "3.5%",
          }}
        ></View>
        <View style={styles.container}>
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
          <Image source={{ uri: song.imageUri }} style={styles.image}></Image>
          <View style={styles.rightContainer}>
            <View>
              <Text style={styles.title}>{song.title}</Text>
              <Text style={styles.artist}>
                {song.artist && song.artist.name}
              </Text>
            </View>
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
      </View>
    </TouchableWithoutFeedback>
  )
}
