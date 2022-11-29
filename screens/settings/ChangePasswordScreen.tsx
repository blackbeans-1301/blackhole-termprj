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
import { useNavigation, useRoute } from "@react-navigation/native"
import constants from "../../constants"

export default function ChangePasswordScreen() {
  const route = useRoute()

  const navigation = useNavigation()
  const [isLoading, setLoadingState] = useState(false)
  const [response, setResponse] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const username = route?.params?.username

  const onResetPasswordRequest = async () => {
    setResponse("")
    if (isLoading) return

    if (oldPassword === "" || newPassword === "") {
      setResponse("Missing field, please fill up the form!")
      return
    }

    if (newPassword.length < 8) {
      setResponse("Password too short")
    }

    setLoadingState(true)
    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.changePassword(user, oldPassword, newPassword)
      navigation.goBack()
    } catch (e) {
      if (e) {
        console.log(e)
        setResponse(e.toString())
      }
    }

    setLoadingState(false)
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
        <Text style={styles.forgotPasswordTitile}>Change your password</Text>
        <View style={styles.form}>
          {/* input for user name */}
          <View style={styles.usernameInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Old Password"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setOldPassword(event)
              }}
            ></TextInput>
          </View>

          <View style={styles.usernameInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="New Password"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setNewPassword(event)
              }}
            ></TextInput>
          </View>

          <View style={{ width: "100%" }}>
            <Text
              style={{
                color: "red",
                fontSize: 14,
                textAlign: "center",
                width: "100%",
              }}
            >
              {response}
            </Text>
          </View>

          {/* for signin button */}
          {isLoading ? (
            <ActivityIndicator
              color={constants.colors.primaryColor}
              size={36}
              style={{ marginTop: 18 }}
            ></ActivityIndicator>
          ) : (
            <TouchableOpacity onPress={onResetPasswordRequest}>
              <View style={styles.ResetPasswordButton}>
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
  usernameInput: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: 20,
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
  ResetPasswordButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#6e6e6e",
    marginTop: 30,
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
  forgotPasswordTitile: {
    color: "white",
    marginTop: 80,
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
})
