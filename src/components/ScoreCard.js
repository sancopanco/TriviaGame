//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
// create a component
const ScoreCard = props => {
  return (
    <View style={styles.scoreContainerStyle}>
      <Text style={styles.scoreTextStyle}> You scored </Text>
      <Text style={styles.scoreTextStyle}>{props.scoreText}</Text>
    </View>
  );
};

ScoreCard.propTypes = {
  scoreText: PropTypes.string.isRequired
};

// define your styles
const styles = StyleSheet.create({
  scoreContainerStyle: {
    alignItems: "center",
    flex: 10
  },
  scoreTextStyle: {
    color: "#fff",
    fontSize: 18
  }
});

//make this component available to the app
export default ScoreCard;
