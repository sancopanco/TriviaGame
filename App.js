import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ResultScreen from "./src/screens/ResultsScreen";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Question: QuizScreen,
    Results: ResultScreen
  },
  {
    initalRouteName: "Home"
  }
);
