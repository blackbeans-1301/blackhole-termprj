import { useRoute } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native"
import AlbumHeader from "../../components/AlbumHeader"
import SongListItem from "../../components/SongListItem"
import { API, graphqlOperation } from "aws-amplify"
import { getAlbum } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { AppContext } from "../../AppContext"
import TrackPlayer from "react-native-track-player"

export default function AlbumScreen() {
  const [songs, setSongs] = useState([])
  const [isAlbumAdded, setAlbumAddedState] = useState(false)
  const [albumDetails, setAlbumDetails] = useState()

  const { setSongsOfAlbum, songsOfAlbum, hasTrack, setHasTrackState } =
    useContext(AppContext)

  const route = useRoute()

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
    const albumId = route!.params!.id

    async function fetchAlbumDetail() {
      try {
        const data = await API.graphql(
          graphqlOperation(getAlbum, { id: albumId })
        )
        setAlbumDetails(data.data.getAlbum)
        setSongs(data.data.getAlbum.songs.items)
      } catch (e) {
        console.log("Album Screen", e)
      }
    }

    fetchAlbumDetail()
  }, [])

  useEffect(() => {
    if (hasTrack === false) {
      setAlbumAddedState(false)
    }
  }, [hasTrack])

  const addAlbumToTrackList = useCallback(async () => {
    if (isAlbumAdded) return
    await TrackPlayer.reset()
    await TrackPlayer.add(listSongsOfAlbum(songs))
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
          height: "80%",
          position: "absolute",
        }}
      />
      <FlatList
        data={songs}
        style={{ minHeight: "100%" }}
        renderItem={({ item }) => (
          <SongListItem
            song={item}
            index={songs.indexOf(item)}
            addAlbumToTrackList={addAlbumToTrackList}
            isAlbumAdded={isAlbumAdded}
            type="albumSongs"
          />
        )}
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
