import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import PlayerWidget from "./components/PlayerWidget"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"

import { Amplify, Auth, auth0SignInButton, Hub } from "aws-amplify"
import config from "./src/aws-exports"
import AuthenticationScreen from "./screens/home/AuthenticationScreen"

import { AppContext } from "./AppContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignUpScreen from "./screens/home/SignUpScreen"
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  Event,
} from "react-native-track-player"
import ConfirmEmailScreen from "./screens/home/ConfirmEmailScreen"
import ForgotPasswordScreen from "./screens/home/ForgotPasswordScreen"
import ResetPasswordScreen from "./screens/home/ResetPasswordScreen"

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
    android: {
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback,
    },
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
      Capability.SeekTo,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
    ],
  })

  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause())
  TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext())
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious()
  )
}

function App() {
  const { hasUser } = useContext(AppContext)
  const [user, setUser] = useState(undefined)

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      })
      setUser(authUser)
    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser()
      }
    }

    Hub.listen("auth", listener)
    return () => Hub.remove("auth", listener)
  }, [])

  //console.log(hasUser)
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={hasUser === "" ? "SignInScreen" : "AppScreen"}
        >
          {user ? (
            <Stack.Screen
              name="AppScreen"
              component={AppWithAuthentication}
              options={{ headerShown: false }}
            />
          ) : (
            <>
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
                name="ConfirmEmailScreen"
                component={ConfirmEmailScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

function AppWithAuthentication() {
  // Auth.signOut()
  useEffect(() => {
    setup()
  }, [])

  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  const [hasTrack, setHasTrackState] = useState(false)
  const [songId, setSongId] = useState("")
  const [songsOfAlbum, setSongsOfAlbum] = useState<string[]>([])
  const [hasUser, setUser] = useState("")
  const [isAlbumAdded, setAlbumAddedState] = useState(false)

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
            hasTrack,
            setHasTrackState: (isPlaying: boolean) =>
              setHasTrackState(isPlaying),
            isAlbumAdded,
            setAlbumAddedState: (isAlbumAdded: boolean) =>
              setAlbumAddedState(isAlbumAdded),
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
