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

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export default function SignUpScreen() {
  const [name, setName] = useState("ghufdfsi")
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("12345678")
  const [email, setEmail] = useState("blackbeans.1301@gmail.com")
  const [repeatPassword, setRepeatPassword] = useState("12345678")
  const [isLoading, setLoadingState] = useState(false)
  const [notFillUpTheForm, setNotFillUpTheForm] = useState(false)
  const [errorRegister, setErrorRegister] = useState("")
  const [repeatPasswordNotMatch, setRepeatPasswordNotMatch] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  const navigation = useNavigation()

  const onRegisterPressed = async () => {
    setLoadingState(false)
    setNotFillUpTheForm(false)
    setInvalidEmail(false)
    setRepeatPasswordNotMatch(false)
    setInvalidPassword(false)
    setErrorRegister("")
    if (
      userName === "" ||
      passWord === "" ||
      repeatPassword === "" ||
      email === "" ||
      name === ""
    ) {
      // console.log(true)
      setNotFillUpTheForm(true)
      return
    }

    if (passWord != repeatPassword) {
      setRepeatPasswordNotMatch(true)
      return
    }

    if (passWord.length < 8) {
      setInvalidPassword(true)
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setInvalidEmail(true)
      return
    }

    setLoadingState(true)
    try {
      const response = await Auth.signUp({
        username: userName,
        password: passWord,
        attributes: {
          name: name,
          email: email,
          preferred_username: userName,
        },
      })

      // console.log(response.userSub)
      navigation.navigate("ConfirmEmailScreen", {
        username: userName,
        userId: response.userSub,
      })
    } catch (e) {
      if (e) {
        setErrorRegister(e.toString())
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
        <View style={styles.form}>
          {/* input for name */}
          <View style={styles.userNameInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Name"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setName(event)
              }}
            ></TextInput>
          </View>

          {/* input for user name */}
          <View style={styles.passwordInput}>
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
              placeholder="Email"
              style={styles.inputStyle}
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setEmail(event)
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
            ></TextInput>
          </View>

          {/* input for pw */}
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Repeat Password"
              placeholderTextColor={"#ccc"}
              onChangeText={(event) => {
                setRepeatPassword(event)
              }}
            ></TextInput>
          </View>

          {/* handle error message */}
          <View style={{ width: "100%", height: 20 }}>
            {invalidEmail && (
              <Text style={styles.incorrectInfo}>
                Invalid email entered, please check your email!
              </Text>
            )}
            {notFillUpTheForm && (
              <Text style={styles.incorrectInfo}>
                Lack of Information, please fill up the form!
              </Text>
            )}
            {errorRegister !== "" && (
              <Text style={styles.incorrectInfo}>
                {errorRegister.includes("Password")
                  ? "Password not long enough, min character is 8!"
                  : errorRegister}
              </Text>
            )}
            {repeatPasswordNotMatch && (
              <Text style={styles.incorrectInfo}>
                Password not match, please try again!
              </Text>
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
            <TouchableOpacity onPress={onRegisterPressed}>
              <View style={styles.signInButton}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {/* for sign up */}
          <View
            style={{
              width: "100%",
              height: 20,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignInScreen")
              }}
            >
              <Text style={{ color: "#ccc", fontSize: 16 }}>Login?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%",
    paddingTop: 100,
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
    paddingTop: 50,
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
  incorrectInfo: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    height: 50,
    paddingTop: 10,
  },
  inputStyle: {
    color: constants.colors.primaryColor,
  },
})
