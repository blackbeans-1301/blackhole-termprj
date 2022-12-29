import { useRoute } from "@react-navigation/native"
import React, { useCallback, useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native"
import AlbumHeader from "../../components/AlbumHeader"
import SongListItem from "../../components/SongListItem"
import { API, graphqlOperation } from "aws-amplify"
import { getAlbum, listUserLikedSong } from "../../src/graphql/queries"
import { LinearGradient } from "expo-linear-gradient"
import constants from "../../constants"
import { AppContext } from "../../AppContext"
import TrackPlayer from "react-native-track-player"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function PlayListScreen() {
  const [songs, setSongs] = useState([])
  const [albumDetails, setAlbumDetails] = useState()
  const [isPlaylistAdded, setIsPlaylistAdded] = useState(false)
  const { setSongsOfAlbum, songsOfAlbum, userId } = useContext(AppContext)
  const route = useRoute()

  const type = route.params.type
  const playlistId = route.params.id

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
    } else if (type == "local") {
      if (route.params) {
        const playList = route.params.playList
        setAlbumDetails(playList)
        setSongs(playList.songs)
        setSongsOfAlbum(listSongsOfAlbum(playList.songs))
      }
    } else {
      listSongsOfPlaylist()
    }
  }, [])

  const addAlbumToTrackList = useCallback(async () => {
    if (isPlaylistAdded) return
    await TrackPlayer.reset()
    await TrackPlayer.add(listSongsOfAlbum(songs))
    await TrackPlayer.play()
    setIsPlaylistAdded(true)
  }, [songs, isPlaylistAdded])

  const resetState = (childPlaylist: any) => {
    setAlbumDetails({ ...childPlaylist })
    setSongs(childPlaylist.songs)
  }

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
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
        ListFooterComponent={(item) => {
          return (
            <View style={{ height: 80 }}>
              <AddSongWidget playlist={albumDetails} resetState={resetState} />
            </View>
          )
        }}
      />
    </View>
  )
}

function AddSongWidget(props) {
  var { playlist, resetState } = props
  const suggestedSongs = [
    {
      artist: { id: "d4e45e0e-dc8b-4d75-bb61-7d49cd6c32f2", name: "Lauv" },
      averageScore: null,
      id: "d556542b-8bbe-4e86-8305-9b2055a3fb1c",
      imageUri:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/covers/c/7/c725a3b85b6fe7ca99e99a9cbc44adcf_1495200385.jpg",
      listened: null,
      lyrics: "i like me better",
      ratedTime: null,
      songUri: "ZW7FADOB",
      title: "I like me better",
    },
    {
      artist: { id: "cf5014cc-e1a6-4957-812a-5ae4968adbad", name: "Maroon 5" },
      averageScore: null,
      id: "7728e045-580a-44da-b3b0-babca25ac6b5",
      imageUri:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/c/a/a/8/caa802d9040e0a3bf8c06cb3f4a31218.jpg",
      listened: null,
      lyrics: "i'm at the payphone, trying to call home,...",
      ratedTime: null,
      songUri: "ZU0WD8Z7",
      title: "Payphone",
    },
    {
      artist: { id: "70012d65-9cb0-4335-91a4-34f323c0a977", name: "John K" },
      averageScore: null,
      id: "b20fd414-3ed3-4f09-a3b6-bea3deeda1e0",
      imageUri:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/7/3/5/273509ec660254bd158e137ecb11e38c.jpg",
      listened: null,
      lyrics: "if we never met",
      ratedTime: null,
      songUri: "ZWB0AWEW",
      title: "If we never met",
    },
  ]

  const addSongToPlaylist = async (song: any) => {
    const storedPlaylists = await AsyncStorage.getItem("playlists")
    let copyPlaylist = playlist
    let songsOfPlaylist = copyPlaylist.songs
    songsOfPlaylist.push(song)
    copyPlaylist.songs = songsOfPlaylist
    resetState(copyPlaylist)
    if (storedPlaylists) {
      var playlistToEdit = JSON.parse(storedPlaylists)
      for (let i = 0; i < playlistToEdit.length; i++) {
        if (copyPlaylist.id === playlistToEdit[i].id) {
          playlistToEdit[i] = playlist
          break
        }
      }
      AsyncStorage.setItem("playlists", JSON.stringify(playlistToEdit))
    } else {
      return
    }
  }

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View></View>
            <Text style={styles.modalText}>Add songs</Text>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign
                name="close"
                size={26}
                color={constants.colors.primaryColor}
                style={{ marginRight: 8 }}
              />
            </Pressable>
          </View>

          <View style={styles.recommendedSongs}>
            <View style={{ margin: 8 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Suggested
              </Text>

              <FlatList
                data={suggestedSongs}
                style={{ minHeight: "100%", marginTop: 18 }}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        marginVertical: 8,
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={{
                            uri: item.imageUri,
                          }}
                          style={styles.image}
                        ></Image>
                        <View
                          style={{ marginLeft: 12, justifyContent: "center" }}
                        >
                          <Text style={{ color: "white" }}>{item.title}</Text>
                          <Text style={{ color: "white" }}>
                            {item.artist.name}
                          </Text>
                        </View>
                      </View>

                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                        }}
                        onPress={() => addSongToPlaylist(item)}
                      >
                        <View>
                          <Entypo
                            name="add-to-list"
                            size={24}
                            color="#ccc"
                            style={{ marginRight: 4 }}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                }}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </Modal>

      <TouchableWithoutFeedback
        onPress={async () => {
          setModalVisible(true)
        }}
      >
        <View style={styles.addSongWidgetContainer}>
          <Image
            source={{
              uri: "https://firstpay.ca/wp-content/uploads/2021/04/12-123015_processing-plus-icon-png-orange-clipart.jpg",
            }}
            style={styles.image}
          ></Image>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>Add Songs</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  addSongWidgetContainer: {
    flexDirection: "row",
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  rightContainer: {
    marginLeft: 15,
    justifyContent: "space-around",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 12,
  },
  artist: {
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    padding: 22,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {},
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: constants.colors.primaryColor,
  },
  recommendedSongs: {
    backgroundColor: "#404040",
    width: "100%",
    height: "100%",
    marginTop: 10,
    borderRadius: 8,
  },
})
