import React, { useContext } from "react"
import { Text, Image, View, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"
import { Song } from "../../types"
import { AppContext } from "../../AppContext"

export type SongListItemProps = {
  song: Song
}

export default function SongListItem(props: SongListItemProps) {
  const { song } = props
  const { setSongId, songsOfAlbum } = useContext(AppContext)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSongId(song.id)
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
