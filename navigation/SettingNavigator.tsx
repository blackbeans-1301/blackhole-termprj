import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SettingScreen from "../screens/settings/SettingScreen"
import ChangePasswordScreen from "../screens/settings/ChangePasswordScreen"
import ProfileScreen from "../screens/settings/ProfileScreen"

const SettingStack = createNativeStackNavigator()

export default function SettingNavigator() {
  return (
    <SettingStack.Navigator initialRouteName="SettingScreen">
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <SettingStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <SettingStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </SettingStack.Navigator>
  )
}
