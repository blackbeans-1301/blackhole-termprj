import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native"
import { AntDesign } from "@expo/vector-icons"
import EditScreenInfo from "../../components/EditScreenInfo"
import constants from "../../constants"
import { RootTabScreenProps } from "../../types"

import { API, graphqlOperation } from "aws-amplify"
import { listPlayLists } from "../../src/graphql/queries"
import { useNavigation } from "@react-navigation/native"
import LikedSongItem from "../../components/LikedSongItem"

const PLAY_LIST_DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwXQR1FMe7YdG9W1du7XLg7nWsR_OY2oe6A&usqp=CAU"

export default function LibScreen() {
  const [playLists, setPlayLists] = useState([])

  useEffect(() => {
    async function getListPlaylists() {
      try {
        const data = await API.graphql(graphqlOperation(listPlayLists))
        setPlayLists(data.data.listPlayLists.items)
      } catch (e) {
        console.log("error fetch playlist", e)
      }
    }

    getListPlaylists()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Your Library</Text>
        <AntDesign name="plus" size={28} color="white" />
      </View>
      <LikedSongItem />
      <LikedSongItem
        data={{
          name: "Downloaded",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png",
          type: "playlist",
          author: "you",
        }}
      />

      <View style={{ alignItems: "center", margin: 20 }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: constants.colors.primaryColor,
            width: "80%",
          }}
        ></View>
      </View>

      <FlatList
        style={{ minHeight: "100%" }}
        data={playLists}
        renderItem={({ item }) => <PlayListItem playList={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  )
}

function PlayListItem(props) {
  const navigation = useNavigation()

  const [playList, setPlayList] = useState()
  useEffect(() => {
    setPlayList(props.playList)
  }, [])
  return (
    playList && (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PlayListScreen", { id: playList.id })
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            height: 60,
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "87%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: 60, height: 60 }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 10 }}
                source={{ uri: playList.imageUri }}
              ></Image>
            </View>
            <View style={{ flex: 1, marginLeft: 15, justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                {playList?.title}
              </Text>
              <Text
                style={{
                  color: "#ccc",
                  fontSize: 13,
                  fontWeight: "400",
                  marginTop: 2,
                }}
              >
                By Blackbeans
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    width: 180,
    paddingBottom: 5,
    borderBottomColor: constants.colors.primaryColor,
    borderBottomWidth: 3,
  },
})
