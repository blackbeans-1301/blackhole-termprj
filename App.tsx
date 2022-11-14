import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import PlayerWidget from "./components/PlayerWidget"
import React, { useCallback, useState } from "react"
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

  const onDismissed = useCallback((songId: string) => {
    setSongId("")
  }, [])

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
          <PlayerWidget onDismissed={onDismissed} />
        </AppContext.Provider>
      </SafeAreaProvider>
    )
  }
}
