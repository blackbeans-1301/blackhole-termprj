import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/home/HomeScreen"
import AlbumScreen from "../screens/home/AlbumScreen"
import PlayListScreen from "../screens/libraries/PlayListScreen"
import LibScreen from "../screens/libraries/LibScreen"
import SearchScreen from "../screens/search/SearchScreen"
import ArtistScreen from "../screens/search/ArtistScreen"

const LibraryStack = createNativeStackNavigator()

export default function SearchNavigator() {
  return (
    <LibraryStack.Navigator initialRouteName="SearchScreen">
      <LibraryStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="ArtistScreen"
        component={ArtistScreen}
        options={{ headerShown: false }}
      />
    </LibraryStack.Navigator>
  )
}
