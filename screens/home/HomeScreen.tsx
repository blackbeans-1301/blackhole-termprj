import React, { useContext, useEffect, useRef, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from "react-native"
import AlbumCategory from "../../components/AlbumCategory"
import { API, graphqlOperation } from "aws-amplify"
import { listAlbumCategories } from "../../src/graphql/queries"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import Moment from "react-moment"
import { TouchableOpacity } from "react-native"
import NumberPlease from "react-native-number-please"
import { Picker } from "@react-native-picker/picker"
import TrackPlayer from "react-native-track-player"
import { AppContext } from "../../AppContext"

export default function HomeScreen() {
  const [categories, setCategories] = useState([])
  const [albums, setAlbums] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [timer, setTimer] = useState(0)

  const appContext = useContext(AppContext)

  const { sleepTimer, setSleepTimer, createdTimer, setCreatedTimer } =
    appContext

  useEffect(() => {
    async function fetchAlbumCategories() {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategories))

        var categoriesData = data.data.listAlbumCategories.items
        var chartItem = categoriesData.find(
          (category) => category.title === "BlackHole Chart"
        )
        categoriesData = categoriesData.filter(
          (category) => category.title !== "BlackHole Chart"
        )
        categoriesData = [chartItem, ...categoriesData]

        setCategories(categoriesData)
      } catch (e) {
        console.log("error fetch album", e)
      }
    }

    fetchAlbumCategories()
  }, [])

  const getTime = () => {
    return "Evening"
  }

  const alarmPressed = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <SafeAreaView>
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
              <Text style={styles.modalText}>Set timer ⏰(min)</Text>

              <View style={styles.timerInput}>
                <Pressable
                  onPress={() => {
                    if (timer > 0) setTimer(timer - 10)
                  }}
                >
                  <AntDesign name="minussquareo" size={30} color="white" />
                </Pressable>
                <TextInput
                  keyboardType="numeric"
                  value={timer === NaN ? "0" : timer.toString()}
                  onChangeText={(value) => {
                    if (value != "Na" && value != "") setTimer(parseInt(value))
                    else setTimer(0)
                  }}
                  style={styles.timerInputNumber}
                ></TextInput>
                <Pressable
                  onPress={() => {
                    setTimer(timer + 10)
                  }}
                >
                  <AntDesign name="plussquareo" size={30} color="white" />
                </Pressable>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  var now = new Date()
                  var sleepTime = now.setMinutes(now.getMinutes() + timer)
                  setSleepTimer(sleepTime)
                  setCreatedTimer(true)
                }}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={styles.session}>Good {getTime()}</Text>
          <View>
            <TouchableOpacity onPress={alarmPressed}>
              <MaterialIcons name="access-alarm" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          style={styles.list}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <AlbumCategory title={item.title} albums={item.albums.items} />
            )
          }}
        />
      </View>
      {/* <View style={{ height: 90 }}></View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    marginBottom: 100,
  },
  list: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  header: {
    marginHorizontal: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  session: {
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
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
  },
  timerInputNumber: {
    flexDirection: "row",
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
})
