import { BackHandler } from './../../node_modules/@types/react-native/index.d'
import { Height } from './../../node_modules/csstype/index.d'
import { Dimensions, StyleSheet } from "react-native"
import constants from "../../constants"
const stylesForFullScreen = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "130%",
    position: "absolute",
    bottom: -110,
    display: "flex",
    justifyContent: "center",
    elevation: 1
  },
  container: {
    width: "90%",
    height: "100%",
    borderRadius: 5,
    marginLeft: "5%",
    paddingTop: 180,
    alignItems: "center",
  },
  topController: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
  topLeft: {
  }, topRight: {
    flexDirection: "row"
  },
  imageView: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35
  }, image: {
    width: 300, height: 300,
    borderRadius: 10,
  },
  songAndArtist: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  artist: {
    marginTop: 2,
    fontSize: 14,
    color: "#ccc"
  },
  progressBar: {
    marginTop: 30,
    width: "100%",
    height: 40,
    alignItems: "center",
  },
  progressBarLine: {
    backgroundColor: "transparent",
    width: "92%",
    height: 3,
  },
  progressBarPlaying: {
    backgroundColor: "white"
  },
  progressBarTime: {
    width: "92%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3
  },
  controller: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 30
    // backgroundColor: "red"
  },
  centerController: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "90%",
    height: 40,
    marginTop: 20,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  }
})

export default stylesForFullScreen