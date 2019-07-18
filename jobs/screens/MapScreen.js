import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'

export default class MapScreen extends Component {
    render() {
        return (
            <View style={{marginTop: Platform.OS === 'android' ? 24 : 0}}>
                <Text> MapScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
