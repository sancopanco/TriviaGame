//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import PropTypes from "prop-types";

// create a component
const AnswerResultItem = props => {
  const { item } = props;
  return (
    <ListItem
      checkmark={item.isCorrect}
      bottomDivider
      title={item.questionTitle}
      subtitle={`Correct Answer: ${item.correctAnswer}`}
      subtitleStyle={{
        color: item.isCorrect ? "green" : "red"
      }}
    />
  );
};

AnswerResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default AnswerResultItem;
