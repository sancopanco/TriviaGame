//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import { connect } from "react-redux";
import Question from "../components/Question";
import * as actions from "../redux/actions";

// create a component
class QuizScreen extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderLoading() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }
  handleActionButton = answer => {
    this.props.answerQuestion(answer);
    const { currentQuestionIndex, questions } = this.props.quiz;
    if (currentQuestionIndex === questions.length - 1) {
      this.props.navigation.navigate("Results");
    }
  };

  renderQuestion() {
    const { questions, currentQuestionIndex } = this.props.quiz;
    const question = questions[currentQuestionIndex];
    if (!question) return null;
    return (
      <Question
        question={question}
        handleActionButton={this.handleActionButton}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestionCount={questions.length}
      />
    );
  }

  render() {
    if (!this.props.quiz.questions.length) {
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
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#998A8B"
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return { quiz: state.quiz };
}
export default connect(mapStateToProps, actions)(QuizScreen);
