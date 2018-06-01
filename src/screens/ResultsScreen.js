//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Card, Button } from "react-native-elements";
var he = require("he");
//import _ from "lodash";

// create a component
class ResultClass extends Component {
  keyExtractor = (item, index) => `${index}`;

  _getCorrectAnswerCount = () => {
    const questions = this.props.navigation.getParam("questions");
    const userAnswers = this.props.navigation.getParam("userAnswers");
    return questions.filter((question, index) => {
      return question.correct_answer === userAnswers[index];
    }).length;
  };

  _checkAnswer = (item, index) => {
    const userAnswers = this.props.navigation.getParam("userAnswers");
    console.log("item.correct_answer", item.correct_answer, userAnswers[index]);
    return item.correct_answer === userAnswers[index];
  };

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        checkmark={this._checkAnswer(item, index)}
        bottomDivider
        title={he.decode(item.question)}
        subtitle={`Correct Answer: ${item.correct_answer}`}
      />
    );
  };
  renderScore() {
    const questions = this.props.navigation.getParam("questions");
    return `${this._getCorrectAnswerCount()} / ${questions.length}`;
  }

  render() {
    const questions = this.props.navigation.getParam("questions");
    return (
      <View style={styles.container}>
        <View style={styles.scoreTextStyle}>
          <Text> You scored </Text>
          <Text>{this.renderScore()}</Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={questions}
          renderItem={this.renderItem}
        />
        <Button
          title="PLAY AGAIN?"
          buttonStyle={{ borderRadius: 0, marginBottom: 0 }}
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  scoreTextStyle: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    marginTop: 40
  }
});

//make this component available to the app
export default ResultClass;
