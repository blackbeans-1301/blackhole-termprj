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

const REGEX_CONTAIN_CHARACTER = /[a-zA-Z]/

export default function ResetPasswordScreen() {
  const route = useRoute()
  const navigation = useNavigation()
  const [isLoading, setLoadingState] = useState(false)
  const [code, setCode] = useState("")
  const [response, setResponse] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [errorNotification, setErrorNotification] = useState("")

  const username = route?.params?.username

  const onResetPasswordConfirmed = async () => {
    setErrorNotification("")

    if (code === "" || password === "" || repeatPassword === "") {
      setErrorNotification("Please fill up the form!")
      return
    }

    if (code.length != 6 || REGEX_CONTAIN_CHARACTER.test(code)) {
      setErrorNotification("Invalid code, please type again!")
      return
    }
    if (password !== repeatPassword) {
      setErrorNotification(
        "Password and repeat password do not match, please try again!"
      )
      return
    }

    setLoadingState(true)
    try {
      await Auth.forgotPasswordSubmit(username, code, password)
      navigation.navigate("SignInScreen", { username: username })
    } catch (e) {
      if (e) setErrorNotification(e.toString())
    }
    setLoadingState(false)
  }

  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username)
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
        <Text style={styles.resetPasswordTitle}>Reset password</Text>
        <View style={styles.form}>
          {/* input for username */}
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

          {/* password */}
          <View style={styles.confirmEmailInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setPassword(event)
              }}
            ></TextInput>
          </View>

          {/* confirm password */}
          <View style={styles.confirmEmailInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Confirm password"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setRepeatPassword(event)
              }}
            ></TextInput>
          </View>

          <View style={{ width: "100%", height: 40, marginBottom: 20 }}>
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
            <TouchableOpacity onPress={onResetPasswordConfirmed}>
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

          <TouchableOpacity onPress={onResendCodePressed}>
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  marginTop: 30,
                  textAlign: "center",
                }}
              >
                Don't see verify code? Click to resend.
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
    paddingTop: 110,
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
    height: 40,
    marginTop: 15,
  },
  resetPasswordTitle: {
    color: "white",
    marginTop: 50,
    fontSize: 24,
    fontWeight: "600",
  },
})
