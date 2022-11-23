import React, { useCallback, useContext, useEffect, useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import EditScreenInfo from "../../components/EditScreenInfo"
import { RootTabScreenProps } from "../../types"
import { Auth } from "aws-amplify"
import constants from "../../constants"
import { TouchableOpacity } from "react-native"
import { navigationRef } from "../../RootNavigation"
import { useNavigation } from "@react-navigation/native"
import { AppContext } from "../../AppContext"

const options = ["Profile", "Change Password", "Sign Out"]

export default function SettingScreen() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [userInfo, setUserInfo] = useState()
  const navigation = useNavigation()
  const { setUser } = useContext(AppContext)

  const checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })
    console.log(authUser)

    setName(authUser.attributes.name)
    setUsername(authUser.username)
    setUserInfo(authUser)
  }

  const onOptionPressed = useCallback(
    async (option: string) => {
      if (option === "Profile") {
        console.log("go to profile screen")
        navigation.navigate("ProfileScreen", { userInfo: userInfo })
      }
      if (option === "Sign Out") {
        const response = await Auth.signOut()
        setUser("")
        console.log(response)
      }

      if (option === "Change Password") {
        console.log(username)
        navigation.navigate("ChangePasswordScreen", { username: username })
      }
    },
    [name]
  )

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.settingTitle}>
        <Text style={styles.title}>Setting</Text>
        <AntDesign
          name="setting"
          size={24}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </View>
      <Text style={styles.userName}>
        Hi,{" "}
        <Text style={{ color: constants.colors.primaryColor, fontSize: 28 }}>
          {name}
        </Text>
      </Text>
      <View style={styles.settingOption}>
        <FlatList
          style={{ marginTop: 20 }}
          data={options}
          renderItem={({ item }) => (
            <OptionItem option={item} onOptionPressed={onOptionPressed} />
          )}
          keyExtractor={(item) => item}
          ListFooterComponent={() => <View style={{ height: 80 }}></View>}
        ></FlatList>
      </View>
    </View>
  )
}

function OptionItem(props) {
  const { onOptionPressed, option } = props

  return (
    <TouchableOpacity
      onPress={() => {
        onOptionPressed(option)
      }}
    >
      <View
        style={{
          height: 45,
          justifyContent: "center",
          width: "85%",
          marginHorizontal: 25,
          marginTop: 20,
          borderWidth: 1,
          borderColor: constants.colors.tabBarActiveColor,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            paddingLeft: 10,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {option}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  userName: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 25,
    fontWeight: "bold",
    paddingBottom: 5,
    width: "50%",
    borderBottomColor: constants.colors.primaryColor,
    borderBottomWidth: 3,
  },
  settingTitle: {
    marginLeft: 25,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  settingOption: {},
})
