import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'

export default class DeckScreen extends Component {
    render() {
        return (
            <View style={{marginTop: Platform.OS === 'android' ? 24 : 0}}>
                <Text> DeckScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
