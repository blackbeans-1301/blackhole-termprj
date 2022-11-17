import React, { useContext, useState } from "react"
import { Text, Image, View, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"
import { Song } from "../../types"
import { AppContext } from "../../AppContext"
import TrackPlayer from "react-native-track-player"

export type SongListItemProps = {
  song: Song
  index: number
  addAlbumToTrackList: Function
  isAlbumAdded: boolean
}

export default function SongListItem(props: SongListItemProps) {
  const { song, index, addAlbumToTrackList, isAlbumAdded } = props
  const { setSongId, songsOfAlbum, hasTrack, setHasTrackState } =
    useContext(AppContext)

  return (
    <TouchableWithoutFeedback
      onPress={async () => {
        console.log("is album added:", isAlbumAdded)
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
