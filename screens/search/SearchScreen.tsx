import React, { useCallback, useEffect, useState } from "react"
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native"

import EditScreenInfo from "../../components/EditScreenInfo"
import { RootTabScreenProps } from "../../types"
import { Feather } from "@expo/vector-icons"
import constants from "../../constants"

import { API, graphqlOperation } from "aws-amplify"
import { artistFinder } from "../../src/graphql/queries"
import SongListItem from "../../components/SongListItem"
import { listSongs } from "../../src/graphql/queries"
import TrackPlayer from "react-native-track-player"

export default function SearchScreen() {
  const [songName, setSongName] = useState("")
  const [songs, setSongs] = useState([
    {
      id: "52349r8yfhdsac",
      imageUri:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
      title: "Melody",
      songUri: "ZWBIF86E",
      listened: null,
      lyrics: "Melody",
      averageScore: null,
      ratedTime: null,
      artist: {
        name: "Lauv",
      },
    },
    {
      id: "52349r8yfhds324dac",
      imageUri:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
      title: "Melody",
      songUri: "ZWBIF86E",
      listened: null,
      lyrics: "Melody",
      averageScore: null,
      ratedTime: null,
      artist: {
        name: "Lauv",
      },
    },
    {
      id: "52349r8yfhdsvs34rac",
      imageUri:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
      title: "Melody",
      songUri: "ZWBIF86E",
      listened: null,
      lyrics: "Melody",
      averageScore: null,
      ratedTime: null,
      artist: {
        name: "Lauv",
      },
    },
  ])
  const [listArtist, setListArtist] = useState([
    {
      id: "u839rhjdisauoy3124fsad",
      name: "Lauv",
      imageUri:
        "https://i.scdn.co/image/ab6761610000e5eb5af53f295e6c42529fbd0873",
      description: "nfujrevcx",
      searchString: "lauv",
    },
  ])

  const [isAlbumAdded, setAlbumAddedState] = useState(false)

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

  const searchSongs = async (value: string) => {
    try {
      const data = await API.graphql(
        graphqlOperation(artistFinder, {
          filter: { searchString: { contains: value } },
        })
      )
      setListArtist(data.data.listArtists.items)
    } catch (e) {
      console.log("error when searching ARTIST", e)
    }

    try {
      const data = await API.graphql(
        graphqlOperation(listSongs, {
          filter: { searchString: { contains: value } },
        })
      )
      setSongs(data.data.listSongs.items)
    } catch (e) {
      console.log("error searching song", e)
    }
  }

  const addAlbumToTrackList = useCallback(async () => {
    if (isAlbumAdded) return
    await TrackPlayer.reset()
    await TrackPlayer.add(listSongsOfAlbum(songs))
    await TrackPlayer.play()
    setAlbumAddedState(true)
  }, [songs, isAlbumAdded])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Searching...</Text>

      {/* for search bar */}
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Name of song..."
            style={styles.input}
            placeholderTextColor="#ccc"
            keyboardType="default"
            returnKeyType="done"
            onChangeText={(value) => {
              setSongName(value)
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              searchSongs(songName)
            }}
          >
            <Feather
              style={{ marginRight: 10 }}
              name="search"
              size={24}
              color={constants.colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={songs}
        renderItem={({ item }) => (
          <SongListItem
            song={item}
            index={songs.indexOf(item)}
            addAlbumToTrackList={addAlbumToTrackList}
            isAlbumAdded={isAlbumAdded}
            type="searchSongs"
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
    paddingTop: 50,
  },
  title: {
    color: "white",
    margin: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  searchBox: {
    width: "90%",
    height: 40,
    backgroundColor: "#303030",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "90%",
    paddingHorizontal: 20,
    color: "white",
  },
  list: {
    marginTop: 20,
  },
})
