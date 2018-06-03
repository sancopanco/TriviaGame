import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import ResultScreen from "../screens/ResultsScreen";
import { createSwitchNavigator } from "react-navigation";

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

export default AppNavigator;
