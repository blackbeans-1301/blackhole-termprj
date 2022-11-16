import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import PlayerWidget from "./components/PlayerWidget"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"

import { Amplify, Auth, auth0SignInButton } from "aws-amplify"
import config from "./src/aws-exports"
import AuthenticationScreen from "./screens/home/AuthenticationScreen"

import { AppContext } from "./AppContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignUpScreen from "./screens/home/SignUpScreen"
import TrackPlayer, { Capability, State } from "react-native-track-player"

Amplify.configure(config)

const Stack = createNativeStackNavigator()

const track1 = {
  url: "http://api.mp3.zing.vn/api/streaming/audio/ZWBIF86E/320", // Load media from the network
  title: "Avaritia",
  artist: "deadmau5",
  album: "while(1<2)",
  genre: "Progressive House, Electro House",
  date: "2014-05-20T07:00:00+00:00", // RFC 3339
  artwork: "http://example.com/cover.png", // Load artwork from the network
  duration: 402, // Duration in seconds
}

async function setup() {
  await TrackPlayer.setupPlayer({})
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
      Capability.SeekTo,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  })

  await TrackPlayer.add([track1])

  const state = await TrackPlayer.getState()
  if (state === State.Playing) {
    console.log("The player is playing")
  }

  let trackIndex = await TrackPlayer.getCurrentTrack()
  let trackObject = await TrackPlayer.getTrack(trackIndex)
  console.log(`Title: ${trackObject.title}`)

  console.log("fhsaifh")

  TrackPlayer.play()
}

function App() {
  setup()

  const { hasUser } = useContext(AppContext)
  console.log(hasUser)
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={hasUser !== "" ? "SignInScreen" : "AppScreen"}
        >
          <Stack.Screen
            name="SignInScreen"
            component={AuthenticationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppScreen"
            component={AppWithAuthentication}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

function AppWithAuthentication() {
  // Auth.signOut()
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  const [songId, setSongId] = useState("")
  const [songsOfAlbum, setSongsOfAlbum] = useState<string[]>([])
  const [hasUser, setUser] = useState("")

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
            hasUser,
            setUser: (userId: string) => setUser(userId),
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

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
}

export default App
