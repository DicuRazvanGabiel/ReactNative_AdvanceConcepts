import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if(props.token) {
            this.props.navigation.navigate("main");
        }
    }

    render() {
        return (
            <View />
        )
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);

const styles = StyleSheet.create({})
