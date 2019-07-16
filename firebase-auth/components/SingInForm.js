import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase"

export default class SingInForm extends Component {
  state = {
    phone: "",
    code: ""
  };

  handleSubmit = async () => {
    try {
      response = await axios.post("https://us-central1-one-time-password-b6260.cloudfunctions.net/verifyOneTimePassword",
        {
          phone: this.state.phone,
          code: this.state.code
        }
      );
      let { data } = response;
      firebase.auth().signInWithCustomToken(data.token)
    } catch (error) {
        console.log(error);
    }
  };

  render() {
    return (
      <View style={{ marginBottom: 10, width: 90 + "%" }}>
        <View style={{ marginBottom: 10 }}>
          <Input
            placeholder="0123 456 789"
            shake={true}
            label="Phone Number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />

          <Input
            placeholder="1234"
            shake={true}
            label="Code"
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
