import { useRoute } from "@react-navigation/native"
import React, { useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native"
import AlbumHeader from "../../components/AlbumHeader"
import SongListItem from "../../components/SongListItem"
import { API, graphqlOperation } from "aws-amplify"
import { getAlbum, listUserLikedSong } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { AppContext } from "../../AppContext"

export default function PlayListScreen() {
  const [songs, setSongs] = useState([])
  const [albumDetails, setAlbumDetails] = useState()
  const { setSongsOfAlbum, songsOfAlbum, userId } = useContext(AppContext)
  const route = useRoute()

  const type = route.params.type
  const playlistId = route.params.id

  console.log(type)

  useEffect(() => {
    function listSongsOfAlbum(songs: any[]) {
      let listOfSongs: any[] = []
      songs.forEach((item) => {
        listOfSongs.push(item.id)
      })
      return listOfSongs
    }

    async function listSongsOfPlaylist() {
      try {
        const data = await API.graphql(
          graphqlOperation(listSongsOfPlaylist, { id: playlistId })
        )
        setAlbumDetails(data.data.getAlbum)
        setSongs(data.data.getAlbum.songs.items)
        setSongsOfAlbum(listSongsOfAlbum(data.data.getAlbum.songs.items))
      } catch (e) {
        console.log("error get playlist", e)
      }
    }

    async function fetchUserLikedSongs() {
      try {
        const data = await API.graphql(
          graphqlOperation(listUserLikedSong, { id: userId })
        )
        setAlbumDetails(data.data.getAlbum)
        setSongs(data.data.getAlbum.songs.items)
        setSongsOfAlbum(listSongsOfAlbum(data.data.getAlbum.songs.items))
      } catch (e) {
        console.log("error get playlist", e)
      }
    }

    if (type == "liked") {
      // fetchUserLikedSongs()
    } else {
      listSongsOfPlaylist()
    }
  }, [])

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[constants.colors.primaryColor, "transparent"]}
        style={{
          width: "120%",
          height: "80%",
          position: "absolute",
        }}
      />
      <FlatList
        data={songs}
        style={{ minHeight: "100%" }}
        renderItem={({ item }) => {
          return <SongListItem song={item} />
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
        ListFooterComponent={() => <View style={{ height: 80 }}></View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    color: "white",
  },
})
