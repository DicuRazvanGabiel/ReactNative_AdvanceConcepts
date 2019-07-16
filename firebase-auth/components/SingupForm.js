import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

export default class SingupForm extends Component {
  state = {
    phone: ""
  };

  handleSubmit = async () => {
    try {
      await axios.post(
        "https://us-central1-one-time-password-b6260.cloudfunctions.net/createUser",
        {
          phone: this.state.phone
        }
      );
    } catch (err) {
      console.log(err);
    }

    try {
      await axios.post(
        "https://us-central1-one-time-password-b6260.cloudfunctions.net/request_one_time_password",
        {
          phone: this.state.phone
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={{ marginBottom: 10, width: 90 + '%' }}>
        <View style={{ marginBottom: 10 }}>
          <Input
            placeholder="0123 456 789"
            shake={true}
            label="Phone Number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
