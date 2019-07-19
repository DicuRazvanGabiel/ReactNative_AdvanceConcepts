import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Platform,
  ActivityIndicator
} from "react-native";
import MapView from "react-native-maps";

export default class MapScreen extends Component {
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
  }

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
      </View>
    );
  }
}

const styles = StyleSheet.create({});
