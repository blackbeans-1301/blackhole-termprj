import React from "react"
import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"
import { AlbumType } from "../../types"

export type AlbumProps = {
  album: AlbumType
}

const Album = (props: AlbumProps) => {
  const navigation = useNavigation()

  const AlbumDetail = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id })
  }

  return (
    <TouchableWithoutFeedback onPress={AlbumDetail}>
      <View style={styles.container}>
        {/* Image of the album */}
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        {/* Artists headline */}
        <Text style={styles.text}>{props.album.artistHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Album
