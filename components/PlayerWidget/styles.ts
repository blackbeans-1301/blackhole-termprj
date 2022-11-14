import { FlexDirection } from './../../node_modules/csstype/index.d'
import { Dimensions, StyleSheet } from "react-native"
import constants from "../../constants"
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    elevation: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    borderRadius: 5,
    height: 70,
    marginLeft: "2.5%",
    alignItems: "center"
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    width: "100%",
    paddingRight: 75,
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
  },
  image: {
    width: 40, height: 40,
    borderRadius: 5,
    marginLeft: 10

  },
  title: {
    color: "white",
    fontSize: 18,
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  artist: {
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: 14
  },
  progressBar: {
    height: 1,
    width: "93%",
    backgroundColor: "#fae2c8"
  },
  controllerRight: {
    flexDirection: "row",
    alignItems: "center"
  },

  elevation: {
    elevation: 20,
    shadowColor: "#000",
  },
})

export default styles