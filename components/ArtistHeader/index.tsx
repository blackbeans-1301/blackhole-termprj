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
import { Entypo } from "@expo/vector-icons"

export type AlbumHeaderProps = {
  album: AlbumType
}

export default function ArtistHeader(props) {
  const [artistDetail, setArtistDetail] = useState()

  useEffect(() => {
    if (props.data !== undefined) {
      setArtistDetail(props.data)
    }
    // setArtistDetail(props.album)
  }, [artistDetail])

  return artistDetail ? (
    <View style={styles.container}>
      <View>
        <Image
          style={[styles.image]}
          source={{ uri: artistDetail.imageUri }}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: 296,
            color: constants.colors.primaryColor,
            left: 21,
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {artistDetail.name}
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 295,
            color: "white",
            left: 20,
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {artistDetail.name}
        </Text>
      </View>

      <View style={styles.actionBar}>
        <View style={styles.followArtist}>
          <Text style={styles.listeners}>201,531 monthly listeners</Text>
          <Text style={styles.followButton}>Follow</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.playButton}>
            <Entypo name="controller-play" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.popularRelease}>Popular releases</Text>
    </View>
  ) : (
    <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
  )
}
