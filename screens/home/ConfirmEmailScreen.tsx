import React, { useContext, useEffect, useState } from "react"
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
import { useNavigation, useRoute } from "@react-navigation/native"
import constants from "../../constants"
import { AppContext } from "../../AppContext"
import { createUser } from "../../src/graphql/mutations"

const REGEX_CONTAIN_CHARACTER = /[a-zA-Z]/
const DEFAULT_USER_VALUES = {
  isAdmin: false,
  avatarUri:
    "https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png",
  isChosenCategories: false,
}

export default function ConfirmEmailScreen() {
  const route = useRoute()
  const navigation = useNavigation()
  const [isLoading, setLoadingState] = useState(false)
  const [errorNotification, setErrorNotification] = useState("")
  const [code, setCode] = useState("")
  const [response, setResponse] = useState("")

  const username = route?.params?.username
  const userId = route?.params?.userId

  const onConfirmEmailPressed = async () => {
    setResponse("")
    setErrorNotification("")
    if (isLoading) return
    if (code.length != 6 || REGEX_CONTAIN_CHARACTER.test(code)) {
      setErrorNotification("Invalid code, please type again!")
      return
    }

    setLoadingState(true)

    try {
      const response = await Auth.confirmSignUp(username, code)
      if (response.toString() === "SUCCESS") {
        setResponse("Confirm Successfully, go to Sign in screen now!")
      }

      createNewUserRecord()
    } catch (e) {
      if (e) setErrorNotification(e.toString())
    }

    setLoadingState(false)
  }

  const resendCodePressed = async () => {
    setLoadingState(true)
    try {
      await Auth.resendSignUp(username)
    } catch (e) {
      console.log(e)
    }
    setLoadingState(false)
  }

  const createNewUserRecord = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(createUser, {
          input: {
            id: userId,
            avatarUri: DEFAULT_USER_VALUES.avatarUri,
            isAdmin: DEFAULT_USER_VALUES.isAdmin,
            isChosenCategories: DEFAULT_USER_VALUES.isChosenCategories,
          },
        })
      )
    } catch (e) {
      console.log(e)
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
        <Text style={styles.confirmEmailTitle}>Confirm Your Email</Text>
        <View style={styles.form}>
          {/* input for user name */}
          <View style={styles.confirmEmailInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Verification code"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setCode(event)
              }}
            ></TextInput>
          </View>

          <View style={{ width: "100%", height: 20 }}>
            {errorNotification != "" && (
              <Text style={styles.incorrectInfo}>{errorNotification}</Text>
            )}
          </View>
          {/* for signin button */}
          {isLoading ? (
            <ActivityIndicator
              color={constants.colors.primaryColor}
              size={36}
              style={{ marginTop: 18 }}
            ></ActivityIndicator>
          ) : (
            <TouchableOpacity onPress={onConfirmEmailPressed}>
              <View style={styles.signInButton}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Confirm
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {response === "" && (
            <TouchableOpacity onPress={resendCodePressed}>
              <Text style={styles.resendCode}>
                Don't receive any code?{" "}
                <Text
                  style={{
                    color: constants.colors.primaryColor,
                    textDecorationLine: "underline",
                    fontSize: 14,
                  }}
                >
                  Click to resend!
                </Text>
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignInScreen", { username: username })
            }}
          >
            <Text style={styles.responseText}>{response}</Text>
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
  responseText: {
    color: constants.colors.tabBarActiveColor,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 50,
    textAlign: "center",
  },
  resendCode: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    top: -70,
  },
  form: {
    paddingTop: 10,
    width: "80%",
  },
  confirmEmailInput: {
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
    marginTop: 10,
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
  confirmEmailTitle: {
    color: "white",
    marginTop: 80,
    fontSize: 24,
    fontWeight: "600",
  },
})
