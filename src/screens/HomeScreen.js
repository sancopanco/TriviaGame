//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
// create a component
class HomeScreen extends Component {
  handleBeginButton = () => {
    this.props.quizStart(() => {
      this.props.navigation.navigate("Question");
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text h4 style={styles.headerTextStyle}>
          Welcome to the Trivia Challange
        </Text>
        <Text
          style={[styles.headerTextStyle, { marginTop: 10, marginBottom: 10 }]}
        >
          You will be presented with 10 True or False questions
        </Text>
        <Text style={styles.headerTextStyle}> Can you score 100%? </Text>

        <Button
          large
          raised
          title="BEGIN"
          buttonStyle={styles.beginButtonStyle}
          onPress={this.handleBeginButton}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#998A8B"
  },
  headerTextStyle: {
    color: "#fff"
  },
  beginButtonStyle: {
    marginTop: 75,
    width: 100,
    height: 100,
    borderRadius: 100
  }
});

//make this component available to the app
export default connect(null, actions)(HomeScreen);
