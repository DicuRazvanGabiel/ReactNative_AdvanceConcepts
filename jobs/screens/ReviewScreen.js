import React, { Component } from "react";
import { Text, StyleSheet, View} from "react-native";
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
    
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight: (
        <View style={{ marginRight: 10 }}>
          <Button
            onPress={() => navigation.navigate("SettingsScreen")}
            title="Settings"
            type="outline"
          />
        </View>
      )
    };
  };

  render() {
    return (
      <View>
        <Text> Review Screeen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
