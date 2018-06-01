//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
// create a component
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to the Tivia Challange </Text>
        <Text> You will be presented with 10 True or False questions </Text>
        <Text> Can you score 100%? </Text>

        <Button
          large
          title="BEGIN"
          onPress={() => this.props.navigation.navigate("Question")}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

//make this component available to the app
export default HomeScreen;
