//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Card, Button } from "react-native-elements";
import { connect } from "react-redux";
var he = require("he");
//import _ from "lodash";

// create a component
class ResultClass extends Component {
  keyExtractor = (item, index) => `${index}`;

  _getCorrectAnswerCount = () => {
    const { userAnswers, questions } = this.props.quiz;
    return questions.filter((question, index) => {
      return question.correct_answer === userAnswers[index];
    }).length;
  };

  _checkAnswer = (item, index) => {
    const { userAnswers } = this.props.quiz;
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
        subtitleStyle={{
          color: this._checkAnswer(item, index) ? "green" : "red"
        }}
      />
    );
  };
  renderScore() {
    const { questions } = this.props.quiz;
    return `${this._getCorrectAnswerCount()} / ${questions.length}`;
  }

  render() {
    const { questions } = this.props.quiz;
    return (
      <View style={styles.container}>
        <View style={styles.scoreContainerStyle}>
          <Text style={styles.scoreTextStyle}> You scored </Text>
          <Text style={styles.scoreTextStyle}>{this.renderScore()}</Text>
        </View>
        <View style={{ flex: 90 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={questions}
            renderItem={this.renderItem}
          />
        </View>
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
  scoreContainerStyle: {
    alignItems: "center",
    flex: 10
  },
  scoreTextStyle: {
    color: "#fff",
    fontSize: 18
  },
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#998A8B"
  }
});

function mapStateToProps({ quiz }) {
  return { quiz };
}

//make this component available to the app
export default connect(mapStateToProps, null)(ResultClass);
