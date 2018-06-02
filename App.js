import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ResultScreen from "./src/screens/ResultsScreen";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
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
