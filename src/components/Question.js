//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Divider, Button } from "react-native-elements";
import PropTypes from "prop-types";

// create a component
const Question = props => {
  const {
    question: { question, category },
    currentQuestionIndex,
    totalQuestionCount,
    handleActionButton
  } = props;

  return (
    <Card
      title={category}
      containerStyle={{
        marginLeft: 10,
        marginRight: 10
      }}
    >
      <Text style={styles.questionTextStyle}>{question}</Text>
      <Divider />
      <View style={styles.actionContainer}>
        <Button
          title="False"
          buttonStyle={styles.actionButtonStyle}
          onPress={() => handleActionButton("False")}
        />
        <Button
          title="True"
          buttonStyle={styles.actionButtonStyle}
          onPress={() => handleActionButton("True")}
        />
      </View>
      <Text>{`${currentQuestionIndex + 1} / ${totalQuestionCount}`}</Text>
    </Card>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestionCount: PropTypes.number.isRequired,
  handleActionButton: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  questionTextStyle: {
    alignSelf: "center",
    marginBottom: 10,
    justifyContent: "center"
  },
  questionContainer: {},
  actionButtonStyle: {},
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 20
  }
});

//make this component available to the app
export default Question;
