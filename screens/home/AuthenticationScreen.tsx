import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import AlbumCategory from "../../components/AlbumCategory"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { listAlbumCategories } from "../../src/graphql/queries"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import constants from "../../constants"

export default function AuthenticationScreen() {
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const navigation = useNavigation()

  const [correctInput, setCorrectInput] = useState(true)
  const [correctInformation, setCorrectInformation] = useState(true)
  const [isSigningIn, setSingingIn] = useState(false)

  const goToSignUp = () => {
    console.log("signup")
    navigation.navigate("SignUpScreen")
  }

  const onSignInPressed = async () => {
    if (userName === "" || passWord === "") {
      setCorrectInput(false)
      return
    }
    setCorrectInput(true)
    try {
      const response = await Auth.signIn(userName, passWord)
      console.log(response)
    } catch (e) {
      console.log("Error signin", e)
      setCorrectInformation(false)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appNameContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://scx2.b-cdn.net/gfx/news/2022/black-hole.jpg",
            }}
          ></Image>
          <Text style={styles.appTitle}>BLACKHOLE</Text>
        </View>
        <View style={styles.form}>
          {/* input for user name */}
          <View style={styles.userNameInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Username"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setUserName(event)
              }}
            ></TextInput>
          </View>

          {/* input for pw */}
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setPassWord(event)
              }}
              secureTextEntry={true}
            ></TextInput>
          </View>
          <View style={{ height: 25 }}>
            {!correctInput && (
              <Text style={styles.incorrectInfo}>
                Incorrect Information, please fill up the form!
              </Text>
            )}
            {!correctInformation && (
              <Text style={styles.incorrectInfo}>
                Incorrect username or password!
              </Text>
            )}
          </View>

          {/* for signin button */}
          <TouchableOpacity onPress={onSignInPressed}>
            <View style={styles.signInButton}>
              {isSigningIn ? (
                <ActivityIndicator></ActivityIndicator>
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Text>
              )}
            </View>
          </TouchableOpacity>

          {/* for sign up */}
          <TouchableOpacity onPress={goToSignUp}>
            <View
              style={{
                width: "100%",
                height: 20,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#ccc", fontSize: 16 }}>
                Don't have account? Sign up here!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%",
    paddingTop: 150,
    alignItems: "center",
  },
  appNameContainer: {
    alignItems: "center",
  },
  appTitle: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    top: -70,
  },
  form: {
    paddingTop: 90,
    width: "80%",
  },
  userNameInput: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  passwordInput: {
    marginTop: 20,
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#6e6e6e",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  inputStyle: {
    color: constants.colors.tabBarActiveColor,
    fontWeight: "700",
    fontSize: 16,
  },
  incorrectInfo: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    height: 35,
    paddingTop: 10,
  },
})
