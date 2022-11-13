import React from "react"
import { View, Text, FlatList } from "react-native"
import Album from "../Album"
import { AlbumType } from "../../types"
import styles from "./styles"

export type AlbumCategory = {
  title: string
  albums: [AlbumType]
}

export default function AlbumCategory(props: AlbumCategory) {
  return (
    <View style={styles.container}>
      {/* Title of the album */}
      <Text style={styles.title}>{props.title}</Text>
      {/* List album here */}
      <FlatList
        style={styles.list}
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
