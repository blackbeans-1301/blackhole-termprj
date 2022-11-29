import React, { useState } from "react"
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
import { listSongsForSearch } from "../../src/graphql/queries"
import SongListItem from "../../components/SongListItem"

export default function SearchScreen() {
  const [songName, setSongName] = useState("")
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])

  const searchSongs = async (value: string) => {
    try {
      const data = await API.graphql(
        graphqlOperation(listSongsForSearch, { filter: { contains: value } })
      )
      setFilteredSongs(filterSongs(data.data.listSongs.items))
    } catch (e) {
      console.log("error searching song", e)
    }
  }

  const filterSongs = (songs) => {
    return songs.filter((song) =>
      song.title.toLowerCase().includes(songName.trim().toLowerCase())
    )
  }

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
              searchSongs(value)
            }}
          ></TextInput>
          <TouchableOpacity onPress={() => {}}>
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
        data={filteredSongs}
        renderItem={({ item }) => <SongListItem song={item} />}
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
