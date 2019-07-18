import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4"},
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" }
];

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Slides data={SLIDE_DATA} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Platform.OS === "android" ? 24 : 0
  }
});
