import React, { useEffect, useState } from "react"
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import styles from "./styles"
import { AlbumType } from "../../types"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"

export type AlbumHeaderProps = {
  album: AlbumType
}

export default function AlbumHeader(props: AlbumHeaderProps) {
  const [albumDetail, setAlbumDetail] = useState()

  useEffect(() => {
    if (props.album !== undefined) {
      setAlbumDetail(props.album)
    }
    // setAlbumDetail(props.album)
  }, [albumDetail])

  return albumDetail ? (
    <View style={styles.container}>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.4,
          shadowRadius: 15,
        }}
      >
        <Image
          style={[styles.image]}
          source={{ uri: albumDetail.imageUri }}
        ></Image>
      </View>

      <Text style={styles.title}>{albumDetail.name}</Text>
      <View>
        <Text style={styles.creator}>
          BY {albumDetail.creator} ● {albumDetail.numberOfLikes} Likes
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
  )
}
