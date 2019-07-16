import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import firebase from "firebase";

import SingupForm from "./components/SingupForm";
import SingInForm from "./components/SingInForm";

export default class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAn0OdyK5x0JvJNo0t_hxn1k0HKSAMJcTU",
      authDomain: "one-time-password-b6260.firebaseapp.com",
      databaseURL: "https://one-time-password-b6260.firebaseio.com",
      projectId: "one-time-password-b6260",
      storageBucket: "",
      messagingSenderId: "856575277199",
      appId: "1:856575277199:web:358839cce2230cb5"
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sing Up</Text>
        <SingupForm />
        <Divider style={{ backgroundColor: "blue", margin: 5 }} />
        <Text style={{ margin: 10 }}>Sing In</Text>
        <SingInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
    width: 98 + "%"
  }
});
