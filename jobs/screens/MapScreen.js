import React, { Component } from "react";
import { StyleSheet, View, Platform, ActivityIndicator, Dimensions } from "react-native";
import MapView from "react-native-maps";

import { connect } from "react-redux";

import * as actions from "../actions";
import { Button } from "react-native-elements";

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === "android" ? 24 : 0 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
            <Button
              large
              title="Search this area"
              backgroundColor="#009688"
              icon={{ name: "search" }}
              onPress={this.onButtonPress}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignContent: 'center',
  }
});

export default connect(
  null,
  actions
)(MapScreen);
