import React, { useEffect, useState } from "react"
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native"
import styles from "./styles"
import { AlbumType } from "../../types"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { MaterialIcons } from "@expo/vector-icons"
import MoreArtist from "../MoreArtist"

export type AlbumHeaderProps = {
  album: AlbumType
}

export default function ArtistFooter(props) {
  const [artistDetail, setArtistDetail] = useState()
  const peopleAlsoLike = [
    {
      id: 1,
      name: "Lauv",
      imageUri:
        "https://yt3.ggpht.com/proxy/4JB-vxNU5DVPVNSi6V-L97LD1htsfaii_gi2JHFCUqS3lKl9zvF4yB-Yfo7nxR7aktgLcwISTExVr7OK30Vh_BfxM28HuWOPox6hlAX-xJTghat1LakqQCoUvmr2LTAGuVykqSg9hxq05MT5JlIZnXJi1CkzfRPfu9bGeHu1aQANt3N1WOM9I13Co5wRWtwtyfBwgJjn7E7E1WJu_VHmzdlgvOu1CGY3UJjSUib4wIuW5W5WK7WpNAgCiAqJPcs2OAkC78fOSmrqavXCWTE=-w400-h400-n-rj-c0xffffffff",
    },
    {
      id: 2,
      name: "Ed Sheeran",
      imageUri:
        "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6",
    },
    {
      id: 3,
      name: "Pink Sweet",
      imageUri:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Pink_Sweats.jpg",
    },
    {
      id: 4,
      name: "Jeremy Zucker",
      imageUri:
        "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      name: "Taylor Swift",
      imageUri:
        "https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg",
    },
  ]
  const artistImg =
    "https://1.bp.blogspot.com/-kxk7mG9kvvE/XooKhvNvVWI/AAAAAAAADDQ/rDpFGsrVILUP_Bnaifa2bmhhJuGK36sPgCLcBGAsYHQ/s1600/1651864201870342-c5-1080x1080.jpg"

  useEffect(() => {
    if (props.data !== undefined) {
      setArtistDetail(props.data)
    }
    // setArtistDetail(props.album)
  }, [artistDetail])

  return artistDetail ? (
    <View style={styles.container}>
      <View>
        <Image style={[styles.image]} source={{ uri: artistImg }}></Image>
        <View
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            flexDirection: "row",
          }}
        >
          <MaterialIcons name="verified" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 4,
            }}
          >
            VERIFIED ARTIST
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: "white",
          width: 350,
          paddingTop: 28,
          fontWeight: "bold",
        }}
      >
        People Also Like
      </Text>
      <FlatList
        data={peopleAlsoLike}
        style={{ paddingHorizontal: 8 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <MoreArtist data={item}></MoreArtist>
        }}
        horizontal
      ></FlatList>
      <View style={{ height: 80 }}></View>
    </View>
  ) : (
    <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
  )
}
