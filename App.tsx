import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import PlayerWidget from "./components/PlayerWidget"
import React, { useCallback, useContext, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"

import { Amplify, Auth, auth0SignInButton } from "aws-amplify"
import config from "./src/aws-exports"

import { AppContext } from "./AppContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native"
import AuthenticationScreen from "./screens/home/AuthenticationScreen"
import SignUpScreen from "./screens/home/SignUpScreen"

Amplify.configure(config)

const Stack = createNativeStackNavigator()

// function App() {
//   const { hasUser } = useContext(AppContext)
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName={hasUser !== "" ? "login" : "AppScreen"}
//         >
//           <Stack.Screen
//             name="login"
//             component={AuthenticationScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="signUp"
//             component={SignUpScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="AppScreen"
//             component={AppWithAuthentication}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   )
// }

function App() {
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

const customTheme = { ...AmplifyTheme }

export default withAuthenticator(App, { signUpConfig, theme: customTheme })
