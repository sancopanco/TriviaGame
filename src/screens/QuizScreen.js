//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import getQuestion from "../Api";
var he = require("he");

// create a component
class QuizScreen extends Component {
  state = { questions: [], currentQuestionIndex: 0, userAnswers: {} };
  componentDidMount() {
    getQuestion().then(questions => {
      this.setState({ questions: questions });
    });
  }

  renderLoading() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }
  handleActionButton = answer => {
    this.setState(
      {
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
        userAnswers: {
          ...this.state.userAnswers,
          [this.state.currentQuestionIndex]: answer
        }
      },
      nextState => {
        //console.log("nextState", this.state);
        if (this.state.currentQuestionIndex === this.state.questions.length) {
          this.props.navigation.navigate("Results", {
            questions: this.state.questions,
            userAnswers: this.state.userAnswers
          });
        }
      }
    );
  };

  renderQuestion() {
    const question = this.state.questions[this.state.currentQuestionIndex];
    if (!question) return null;
    const questionText = he.decode(question.question);
    return (
      <Card
        title={question.category}
        containerStyle={{
          flex: 1,
          alignSelf: "stretch",
          width: undefined,
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <Text style={styles.questionTextStyle}>{questionText}</Text>
        <Divider />
        <View style={styles.actionContainer}>
          <Button
            title="False"
            buttonStyle={styles.actionButtonStyle}
            onPress={() => this.handleActionButton("False")}
          />
          <Button
            title="True"
            buttonStyle={styles.actionButtonStyle}
            onPress={() => this.handleActionButton("True")}
          />
        </View>
      </Card>
    );
  }

  render() {
    if (!this.state.questions.length) {
      return this.renderLoading();
    }
    return (
      <View style={styles.container}>
        <Text>{this.props.headline}</Text>
        <View style={styles.questionContainer}>{this.renderQuestion()}</View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  },
  questionTextStyle: {
    alignSelf: "center",
    marginBottom: 10
  },
  questionContainer: {
    flex: 1
  },
  actionButtonStyle: {},
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 20
  }
});

//make this component available to the app
export default QuizScreen;
