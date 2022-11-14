import React, { useEffect, useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import EditScreenInfo from "../../components/EditScreenInfo"
import { RootTabScreenProps } from "../../types"
import { Auth } from "aws-amplify"
import constants from "../../constants"
import { TouchableOpacity } from "react-native"

const options = ["Your Profile", "Change Password", "Sign Out"]

export default function SettingScreen() {
  const [userName, setUserName] = useState("")

  const checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })
    console.log(authUser)

    setUserName(authUser.username)
    console.log(userName)
  }

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
          {userName}
        </Text>
      </Text>
      <View style={styles.settingOption}>
        <FlatList
          style={{ marginTop: 70 }}
          data={options}
          style={{}}
          renderItem={({ item }) => <OptionItem option={item} />}
          keyExtractor={(item) => item}
          ListFooterComponent={() => <View style={{ height: 80 }}></View>}
        ></FlatList>
      </View>
    </View>
  )
}

function OptionItem(props) {
  const optionPressed = async (option: string) => {
    if (option === "Sign Out") {
      Auth.signOut()
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        optionPressed(props.option)
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
          {props.option}
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
    width: 170,
    borderBottomColor: constants.colors.primaryColor,
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  settingTitle: {
    marginLeft: 25,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  settingOption: {},
})
