import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    marginTop: 20,
    marginBottom: 0
  },
  rightContainer: {
    marginLeft: 15,
    justifyContent: "space-around",
  },
  image: {
    width: 55, height: 55,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  artist: {
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: 16
  }
})

export default styles