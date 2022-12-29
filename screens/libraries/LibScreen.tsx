import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from "react-native"
import { AntDesign } from "@expo/vector-icons"
import EditScreenInfo from "../../components/EditScreenInfo"
import constants from "../../constants"
import { RootTabScreenProps } from "../../types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { API, graphqlOperation } from "aws-amplify"
import { listPlayLists } from "../../src/graphql/queries"
import { createPlayList } from "../../src/graphql/mutations"
import { useNavigation } from "@react-navigation/native"
import LikedSongItem from "../../components/LikedSongItem"

const PLAY_LIST_DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwXQR1FMe7YdG9W1du7XLg7nWsR_OY2oe6A&usqp=CAU"

export default function LibScreen() {
  const [playLists, setPlayLists] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [playlistName, setPlayListName] = useState("")

  useEffect(() => {
    async function getListPlaylists() {
      const storedPlaylists = await AsyncStorage.getItem("playlists")

      if (storedPlaylists) {
        setPlayLists(JSON.parse(storedPlaylists))
      }
    }
    getListPlaylists()
  }, [])

  const createPlaylist = async () => {
    try {
      var currentPlaylist = playLists
      var creatingPlaylist = {
        id: "id" + Math.random().toString(16).slice(2),
        title: playlistName,
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwXQR1FMe7YdG9W1du7XLg7nWsR_OY2oe6A&usqp=CAU",
        songs: [],
        createdBy: "You",
      }
      currentPlaylist.push(creatingPlaylist)
      AsyncStorage.setItem("playlists", JSON.stringify(currentPlaylist))
    } catch (e) {}
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create your playlist</Text>

            <View style={styles.timerInput}>
              <TextInput
                keyboardType="default"
                onChangeText={(value) => {
                  setPlayListName(value)
                }}
                style={styles.timerInputNumber}
              ></TextInput>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                createPlaylist()
              }}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.title}> Your Library</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <AntDesign name="plus" size={28} color="white" />
        </TouchableOpacity>
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
        style={{}}
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
          navigation.navigate("PlayListScreen", {
            id: playList.id,
            type: "local",
            playList: playList,
          })
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
                By {playList.createdBy}
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 200,
    backgroundColor: "black",
    borderRadius: 12,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    borderColor: "orange",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "orange",
    width: 90,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  timerInput: {
    flexDirection: "row",
    color: "white",
    marginVertical: 15,
    backgroundColor: constants.colors.primaryColor,
  },
  timerInputNumber: {
    flexDirection: "row",
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
})
