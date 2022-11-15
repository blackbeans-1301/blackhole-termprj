import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/home/HomeScreen"
import AlbumScreen from "../screens/home/AlbumScreen"

const HomeStack = createNativeStackNavigator()

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}
