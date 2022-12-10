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
import TrackPlayer from "react-native-track-player"

export default function LikedSongScreen() {
  const [songs, setSongs] = useState([])
  const [isAlbumAdded, setAlbumAddedState] = useState(false)
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const { setSongsOfAlbum, songsOfAlbum, userId } = useContext(AppContext)
  const route = useRoute()

  const navigation = useNavigation()

  function listSongsForTrack(songs: any[]) {
    let listOfSongs: any[] = []
    songs.forEach((item) => {
      listOfSongs.push({
        id: item.song.id,
        artist: item.song.artist,
        url: `http://api.mp3.zing.vn/api/streaming/audio/${item.song.songUri}/320`,
        artwork: item.song.imageUri,
        title: item.song.title,
        averageScore: item.song.averageScore,
        ratedTime: item.song.ratedTime,
      })
    })
    console.log(listOfSongs[0])
    return listOfSongs
  }

  useEffect(() => {
    async function fetchUserLikedSongs() {
      try {
        const data = await API.graphql(
          graphqlOperation(listUserLikedSong, { id: userId })
        )
        setSongs(data.data.getUser.favoriteSongs.items)
        console.log(data.data.getUser.favoriteSongs.items)
      } catch (e) {
        console.log("error get playlist", e)
      }
    }
    // fetchUserLikedSongs()
  }, [])

  const addAlbumToTrackList = useCallback(async () => {
    if (isAlbumAdded) return
    await TrackPlayer.reset()
    await TrackPlayer.add(listSongsForTrack(songs))
    await TrackPlayer.play()
    setAlbumAddedState(true)
  }, [songs, isAlbumAdded])

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
          <Text style={styles.title}>Liked Songs</Text>
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
              song={item.song}
              index={songs.indexOf(item)}
              addAlbumToTrackList={addAlbumToTrackList}
              isAlbumAdded={isAlbumAdded}
              type="likedSongs"
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
