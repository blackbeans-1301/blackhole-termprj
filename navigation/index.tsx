/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, EvilIcons, MaterialIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LinearGradient } from "expo-linear-gradient"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import { Button, ColorSchemeName, Pressable } from "react-native"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"
import ModalScreen from "../screens/ModalScreen"
import NotFoundScreen from "../screens/NotFoundScreen"
import HomeScreen from "../screens/home/HomeScreen"
import HomeNavigator from "./HomeNavigator"
import SearchScreen from "../screens/search/SearchScreen"
import LibScreen from "../screens/libraries/LibScreen"
import SettingScreen from "../screens/settings/SettingScreen"
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types"
import LinkingConfiguration from "./LinkingConfiguration"
import constants from "../constants"

import { navigationRef } from "../RootNavigation"
import PlayListNavigator from "./PlayListNavigator"
import SettingNavigation from "./SettingNavigator"
import SettingNavigator from "./SettingNavigator"
import SearchNavigator from "./SearchNavigator"

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      independent={true}
      linking={LinkingConfiguration}
      theme={DarkTheme}
      ref={navigationRef}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: constants.colors.tabBarActiveColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={PlayListNavigator}
        options={{
          title: "Your Library",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="library-music" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

function BottomTabBar({ navigation }) {
  return <></>
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"]
  color: string
}) {
  return <MaterialIcons size={26} style={{ marginBottom: -3 }} {...props} />
}
