//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import AnswerResultList from "../components/AnswerResultList";
import ScoreCard from "../components/ScoreCard";

// create a component
class ResultScreen extends Component {
  _getScoreText() {
    const { userAnswers } = this.props.quiz;
    const correctAnswerCount = userAnswers.filter(item => item.isCorrect)
      .length;
    return `${correctAnswerCount} / ${userAnswers.length}`;
  }

  render() {
    const { userAnswers } = this.props.quiz;
    return (
      <View style={styles.container}>
        <ScoreCard scoreText={this._getScoreText()} />
        <View style={{ flex: 90 }}>
          <AnswerResultList answers={userAnswers} />
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
export default connect(
  mapStateToProps,
  null
)(ResultScreen);
