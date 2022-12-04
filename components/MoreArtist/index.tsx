import React from "react"
import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"
import { AlbumType } from "../../types"

export type AlbumProps = {
  album: AlbumType
}

const MoreArtist = (props) => {
  const data = props.data
  console.log(data)
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        {/* Image of the album */}
        <Image source={{ uri: data.imageUri }} style={styles.image} />
        {/* Artists headline */}
        <Text style={styles.text}>{data.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MoreArtist
