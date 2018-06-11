//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AnswerResultItem from "./AnswerResultItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// create a component
class AnswerResultList extends Component {
  keyExtractor = (item, index) => `${index}`;

  renderItem = ({ item }) => <AnswerResultItem item={item} />;

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.answers}
        renderItem={this.renderItem}
      />
    );
  }
}

AnswerResultList.propTypes = {
  answers: PropTypes.array.isRequired
};

export default AnswerResultList;
