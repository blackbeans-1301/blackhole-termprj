import React, { useContext, useState } from "react"
import { Text, Image, View, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"
import { Song } from "../../types"
import { AppContext } from "../../AppContext"
import TrackPlayer from "react-native-track-player"
import { useNavigation } from "@react-navigation/native"

export type SongListItemProps = {
  song: Song
  index: number
  addAlbumToTrackList: Function
  isAlbumAdded: boolean
  type: String
}

export default function SongListItem(props: SongListItemProps) {
  const { song, index, addAlbumToTrackList, isAlbumAdded, type } = props
  const { setSongId, songsOfAlbum, hasTrack, setHasTrackState } =
    useContext(AppContext)
  const navigation = useNavigation()

  if (song.imageUri === undefined) {
    song.imageUri = song.artwork
  }

  if (type === "artist") {
    return (
      <TouchableWithoutFeedback
        onPress={async () => {
          const artist = song
          navigation.navigate("ArtistScreen", {
            artist,
          })
        }}
      >
        <View style={styles.container}>
          <Image source={{ uri: song.imageUri }} style={styles.image}></Image>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{song.name}</Text>
            <Text style={styles.artist}>{song.description}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  if (type === "likedSongs") {
    return (
      <TouchableWithoutFeedback
        onPress={async () => {
          if (!isAlbumAdded) {
            addAlbumToTrackList()
            if (!hasTrack) {
              setHasTrackState(true)
            }
          }
          await TrackPlayer.skip(index, 0)

          if (isAlbumAdded) await TrackPlayer.play()
        }}
      >
        <View style={styles.container}>
          <Image source={{ uri: song.imageUri }} style={styles.image}></Image>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist && song.artist.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <TouchableWithoutFeedback
      onPress={async () => {
        if (!isAlbumAdded) {
          addAlbumToTrackList()
          if (!hasTrack) {
            setHasTrackState(true)
          }
        }
        await TrackPlayer.skip(index, 0)

        if (isAlbumAdded) await TrackPlayer.play()
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image}></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist && song.artist.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
