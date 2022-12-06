import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native"
import AlbumHeader from "../../components/AlbumHeader"
import SongListItem from "../../components/SongListItem"
import { API, graphqlOperation } from "aws-amplify"
import { getAlbum, listUserLikedSong } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { AppContext } from "../../AppContext"
import { Ionicons } from "@expo/vector-icons"

export default function DownloadedSongsScreen() {
  const [songs, setSongs] = useState([])
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const [albumDetails, setAlbumDetails] = useState()
  const { setSongsOfAlbum, songsOfAlbum, userId } = useContext(AppContext)
  const route = useRoute()

  const navigation = useNavigation()

  useEffect(() => {
    function listSongsOfAlbum(songs: any[]) {
      let listOfSongs: any[] = []
      songs.forEach((item) => {
        listOfSongs.push(item.id)
      })
      return listOfSongs
    }

    // async function listSongsOfPlaylist() {
    //   try {
    //     const data = await API.graphql(
    //       graphqlOperation(listSongsOfPlaylist, { id: playlistId })
    //     )
    //     setAlbumDetails(data.data.getAlbum)
    //     setSongs(data.data.getAlbum.songs.items)
    //     setSongsOfAlbum(listSongsOfAlbum(data.data.getAlbum.songs.items))
    //   } catch (e) {
    //     console.log("error get playlist", e)
    //   }
    // }

    // async function fetchUserLikedSongs() {
    //   try {
    //     const data = await API.graphql(
    //       graphqlOperation(listUserLikedSong, { id: userId })
    //     )
    //     setAlbumDetails(data.data.getAlbum)
    //     setSongs(data.data.getAlbum.songs.items)
    //     setSongsOfAlbum(listSongsOfAlbum(data.data.getAlbum.songs.items))
    //   } catch (e) {
    //     console.log("error get playlist", e)
    //   }
    // }
  }, [])

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[constants.colors.primaryColor, "transparent"]}
        style={{
          width: "120%",
          height: "25%",
          position: "absolute",
        }}
      />
      <View style={styles.likedSongHeader}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Downloaded Songs</Text>
          <Text style={styles.songNumber}>{numberOfSongs} song</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.playCircle}>
            <Ionicons name="play-sharp" size={24} color="black" />
          </View>
        </View>
      </View>
      <FlatList
        data={songs}
        style={{ minHeight: "100%" }}
        renderItem={({ item }) => {
          return <SongListItem song={item} />
        }}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <View style={{ height: 80 }}></View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingTop: 20,
  },
  title: {
    marginTop: 20,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 24,
  },
  songNumber: {
    color: "#ccc",
    marginTop: 5,
  },
  likedSongHeader: {
    justifyContent: "space-between",
    margin: 25,
    flexDirection: "row",
  },
  headerRight: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  playCircle: {
    backgroundColor: "#ffa53d",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
})
