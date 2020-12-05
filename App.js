import React from "react";
import {
  Text,
  StyleSheet,
  View,
  InputText,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "react-native-splash-screen";

import profile from "/screens/profile";
import dice from "./screen/dice";
import Imagescreen from "./screens/drawer";
import listscreen from "./screens/splashscreen";

import DrawerNavigation from "./src/pages/drawer";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    authenticated: false,
  };

  setAuth = (action) => {
    this.setState({ authenticated: action });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor="#0D2C54" /> */}
        <NavigationContainer>
          {this.state.authenticated === true ? (
            <DrawerNavigation logout={this.setAuth} />
          ) : (
            <Stack.Navigator initialRouteName="splashscreen">
              <Stack.Screen
                name="splashscreen"
                component={Welcome}
                Image={Imagescreen}
                profile={ProfileScreen}
                initialParams={{ setAuth: this.setAuth }}
              />
              <Stack.Screen name="dice" component={dice} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </View>
    );
  }
}

const mystyles = StyleSheet.create({});
