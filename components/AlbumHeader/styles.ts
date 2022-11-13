import { StyleSheet } from "react-native"
import constants from "../../constants"
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 50,
  },
  image: {
    width: 250, height: 250,
    margin: 15,
  },
  imageShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 446,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },
  creatorContainer: {

  },
  numberOfLikes: {

  },
  creator: {
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: 12
  },
  buttonContainer: {
    backgroundColor: constants.colors.primaryColor,
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 20
  },
  playButton: {

  },
  playButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default styles