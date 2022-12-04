import { StyleSheet } from "react-native"
import constants from "../../constants"
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 32
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 8
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
    width: 50,
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
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 380,
    alignItems: "center",
    paddingHorizontal: 20
  },
  followArtist: {

  },
  listeners: {
    color: "#ccc",
    fontSize: 13,
    fontFamily: "Montserrat"
  },
  followButton: {
    fontSize: 13,
    color: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    width: 80,
    marginTop: 8
  },
  popularRelease: {
    color: "white",
    textAlign: "left",
    paddingTop: 12,
    paddingLeft: 16,
    fontFamily: "Montserrat",
    fontSize: 17,
    fontWeight: "bold",
    width: 380
  }
})

export default styles