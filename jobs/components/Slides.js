import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions} from "react-native";
import { Button } from "react-native-elements";

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDHT = Dimensions.get('window').width;

export default class Slides extends Component {

  renderLastSlide = (index) => {
    if(index === this.props.data.length - 1){
      return (
        <Button 
          title="Onwards!"
          raised
          buttonStyle={styles.style}
          onPress={this.props.lastSlideButton}
        />
      )
    }
  }

  renderSlides = () => {
    return this.props.data.map((slide, i) => {
      return (
        <View 
            key={slide.text} 
            style={[styles.slide, {backgroundColor: slide.color}]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      );
    });
  };

  render() {
    return (
        <ScrollView 
            horizontal 
            style={{height: DEVICE_HEIGHT}}
            pagingEnabled
        >
            {this.renderSlides()}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideText: {
    fontSize: 30,
    margin: 10,
    color: 'white'
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: DEVICE_WIDHT
  },

  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
});
