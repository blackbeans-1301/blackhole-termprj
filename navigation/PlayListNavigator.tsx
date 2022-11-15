import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/home/HomeScreen"
import AlbumScreen from "../screens/home/AlbumScreen"
import PlayListScreen from "../screens/libraries/PlayListScreen"
import LibScreen from "../screens/libraries/LibScreen"

const LibraryStack = createNativeStackNavigator()

export default function HomeNavigator() {
  return (
    <LibraryStack.Navigator initialRouteName="LibraryScreen">
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibScreen}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="PlayListScreen"
        component={PlayListScreen}
        options={{ headerShown: false }}
      />
    </LibraryStack.Navigator>
  )
}
