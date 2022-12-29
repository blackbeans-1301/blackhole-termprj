import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect, useState } from "react"
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
import AsyncStorage from "@react-native-async-storage/async-storage"
import TrackPlayer from "react-native-track-player"

export default function DownloadedSongsScreen() {
  const [songs, setSongs] = useState([])
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const [albumDetails, setAlbumDetails] = useState()
  const [isPlaylistAdded, setIsPlaylistAdded] = useState(false)
  const { setSongsOfAlbum, songsOfAlbum, userId } = useContext(AppContext)
  const route = useRoute()

  const navigation = useNavigation()

  function listSongsOfAlbum(songs: any[]) {
    let listOfSongs: any[] = []
    songs.forEach((item) => {
      listOfSongs.push({
        id: item.id,
        artist: item.artist,
        url: `http://api.mp3.zing.vn/api/streaming/audio/${item.songUri}/320`,
        artwork: item.imageUri,
        title: item.title,
        averageScore: item.averageScore,
        ratedTime: item.ratedTime,
      })
    })
    return listOfSongs
  }

  useEffect(() => {
    const getSongs = async () => {
      const data = await AsyncStorage.getItem("downloaded")

      if (data) {
        const downloadedSongs = JSON.parse(data)
        setSongs(downloadedSongs)
        setSongsOfAlbum(listSongsOfAlbum(downloadedSongs))
      }
    }

    getSongs()
  }, [])

  const addAlbumToTrackList = useCallback(async () => {
    if (isPlaylistAdded) return
    await TrackPlayer.reset()
    await TrackPlayer.add(listSongsOfAlbum(songs))
    await TrackPlayer.play()
    setIsPlaylistAdded(true)
  }, [songs, isPlaylistAdded])

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
          return (
            <SongListItem
              song={item}
              index={songs.indexOf(item)}
              addAlbumToTrackList={addAlbumToTrackList}
              isAlbumAdded={isPlaylistAdded}
              type="local"
            />
          )
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
