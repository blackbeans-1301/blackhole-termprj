import React, { useContext, useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { getUserForAuth } from "../../src/graphql/queries"
import { useNavigation, useRoute } from "@react-navigation/native"
import constants from "../../constants"
import { AppContext } from "../../AppContext"

export default function AuthenticationScreen() {
  // Auth.signOut()

  const route = useRoute()
  const username = route?.params?.username

  const [userName, setUserName] = useState(username || "")
  const [passWord, setPassWord] = useState("")
  const navigation = useNavigation()

  const [correctInput, setCorrectInput] = useState(true)
  const [correctInformation, setCorrectInformation] = useState(true)
  const [isSigningIn, setSingingIn] = useState(false)
  const [singIngErrorMessage, setSingIngErrorMessage] = useState("")

  const { hasUser, setUser } = useContext(AppContext)

  const goToSignUp = () => {
    console.log("signup")
    navigation.navigate("SignUpScreen", {})
  }

  const onSignInPressed = async () => {
    setSingIngErrorMessage("")
    setCorrectInformation(true)
    setCorrectInput(true)
    if (isSigningIn) return

    if (userName === "" || passWord === "") {
      setCorrectInput(false)
      return
    }
    setSingingIn(true)
    try {
      const response = await Auth.signIn(userName, passWord)
      signInToApp(response.attributes.sub)
    } catch (e) {
      console.log("Error signin", e)
      setCorrectInformation(false)
      setSingingIn(false)
    }
  }

  const onForgotPasswordPressed = async () => {
    navigation.navigate("ForgotPasswordScreen", {})
  }

  const signInToApp = async (userId: string) => {
    try {
      const response = await API.graphql(
        graphqlOperation(getUserForAuth, { id: userId })
      )
      setSingingIn(false)

      if (response.data.getUser === null) {
        setSingIngErrorMessage(
          "User not found, please check your username and sign in again"
        )
      } else {
        setUser(userId)
        // navigation.navigate("AppScreen", {})
      }
    } catch (e) {}
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
          {isSigningIn ? (
            <ActivityIndicator
              color={constants.colors.primaryColor}
              size={36}
              style={{ marginTop: 18 }}
            ></ActivityIndicator>
          ) : (
            <TouchableOpacity onPress={onSignInPressed}>
              <View style={styles.signInButton}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {/* Forgot password */}
          <TouchableOpacity onPress={onForgotPasswordPressed}>
            <View
              style={{
                width: "100%",
                height: 20,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#ccc", fontSize: 16 }}>
                Forgot password?{" "}
              </Text>
            </View>
          </TouchableOpacity>

          {/* for sign up */}
          <TouchableOpacity onPress={goToSignUp}>
            <View
              style={{
                width: "100%",
                height: 20,
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: constants.colors.primaryColor,
                }}
              >
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
