import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import PlayerWidget from "./components/PlayerWidget"
import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"

import { Amplify } from "aws-amplify"
import awsconfig from "./src/aws-exports"

import { AppContext } from "./AppContext"

Amplify.configure(awsconfig)

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  const [songId, setSongId] = useState("")
  const [songsOfAlbum, setSongsOfAlbum] = useState<string[]>([])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{
            songId,
            setSongId: (id: string) => setSongId(id),
            songsOfAlbum,
            setSongsOfAlbum: (songsId: string[]) => setSongsOfAlbum(songsId),
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget
            song={{
              id: "1",
              songUri:
                "http://api.mp3.zing.vn/api/streaming/audio/ZW9DFW9A/320",
              imageUri:
                "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg",
              title: "Thằng điên",
              artist: "Phương Ly feat.JustaTee",
            }}
          />
        </AppContext.Provider>
      </SafeAreaProvider>
    )
  }
}
