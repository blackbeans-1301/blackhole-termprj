import { useRoute } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native"
import AlbumHeader from "../../components/AlbumHeader"
import SongListItem from "../../components/SongListItem"
import { API, graphqlOperation } from "aws-amplify"
import { getAlbum, getSongsOfArtist } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { AppContext } from "../../AppContext"
import TrackPlayer from "react-native-track-player"
import ArtistHeader from "../../components/ArtistHeader"
import ArtistFooter from "../../components/ArtistFooter"

export default function ArtistScreen() {
  const data = {
    id: "ndahieqk,as",
    name: "Shawn Mendes",
    imageUri:
      "https://ca-times.brightspotcdn.com/dims4/default/c6f6496/2147483647/strip/true/crop/4879x3253+0+0/resize/840x560!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7e%2F0b%2F8d726d244363a763c86c77e8ce50%2Fla-photos-1staff-482439-et-grammy-awards-arrivals-ajs-2059-721254-721386.jpg",
    description:
      "Shawn Peter Raul Mendes (/ˈmɛndɛz/; born August 8, 1998) is a Canadian singer and songwriter. He gained a following in 2013, posting song covers on the video-sharing application Vine.",
    songs: [
      {
        id: "1",
        title: "Senorita",
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtclhyQ7L0Ug27m36272RKv-OfA5BNPqi0dw&usqp=CAU",
        songUri: "ZWAFDUW0",
        listened: 0,
        lyrics: "senorita",
        averageScore: 0,
        ratedTime: 0,
        artist: {
          id: "ndaiuhfwiuehfasd",
          name: "Shawn Mendes",
        },
      },
      {
        id: "2",
        title: "Life of the party",
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtclhyQ7L0Ug27m36272RKv-OfA5BNPqi0dw&usqp=CAU",
        songUri: "ZWAFDUW0",
        listened: 0,
        lyrics: "senorita",
        averageScore: 0,
        ratedTime: 0,
        artist: {
          id: "ndaiuhfwiuehfasd",
          name: "Shawn Mendes",
        },
      },
      {
        id: "3",
        title: "Treat you better",
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtclhyQ7L0Ug27m36272RKv-OfA5BNPqi0dw&usqp=CAU",
        songUri: "ZWAFDUW0",
        listened: 0,
        lyrics: "senorita",
        averageScore: 0,
        ratedTime: 0,
        artist: {
          id: "ndaiuhfwiuehfasd",
          name: "Shawn Mendes",
        },
      },
      {
        id: "4",
        title: "Mercy",
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtclhyQ7L0Ug27m36272RKv-OfA5BNPqi0dw&usqp=CAU",
        songUri: "ZWAFDUW0",
        listened: 0,
        lyrics: "senorita",
        averageScore: 0,
        ratedTime: 0,
        artist: {
          id: "ndaiuhfwiuehfasd",
          name: "Shawn Mendes",
        },
      },
      {
        id: "5",
        title: "Senorita",
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtclhyQ7L0Ug27m36272RKv-OfA5BNPqi0dw&usqp=CAU",
        songUri: "ZWAFDUW0",
        listened: 0,
        lyrics: "senorita",
        averageScore: 0,
        ratedTime: 0,
        artist: {
          id: "ndaiuhfwiuehfasd",
          name: "Shawn Mendes",
        },
      },
    ],
  }

  const [songs, setSongs] = useState([])
  const [isAlbumAdded, setAlbumAddedState] = useState(false)
  const [albumDetails, setAlbumDetails] = useState()

  const { setSongsOfAlbum, songsOfAlbum, hasTrack, setHasTrackState } =
    useContext(AppContext)

  const route = useRoute()
  const artistData = route.params!.artist

  function listSongsOfAlbum(songs: any[]) {
    let listOfSongs: any[] = []
    songs.forEach((item) => {
      listOfSongs.push({
        id: item.id,
        artist: item.artist,
        url: `http://api.mp3.zing.vn/api/streaming/audio/${item.songUri}/320`,
        artwork: item.imageUri,
        title: item.title,
      })
    })
    return listOfSongs
  }

  useEffect(() => {
    async function fetchSongsOfArtist() {
      try {
        const data = await API.graphql(
          graphqlOperation(getSongsOfArtist, { id: artistData.id })
        )
        setAlbumDetails(data.data.getArtist.songs.items)
        setSongs(data.data.getArtist.songs.items)
      } catch (e) {
        console.log("Album Screen", e)
      }
    }

    fetchSongsOfArtist()
  }, [])

  // useEffect(() => {
  //   if (hasTrack === false) {
  //     setAlbumAddedState(false)
  //   }
  // }, [hasTrack])

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
            type="song"
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <ArtistHeader data={artistData} />}
        ListFooterComponent={() => (
          <ArtistFooter data={artistData}></ArtistFooter>
        )}
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
