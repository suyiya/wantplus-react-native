/**
 * Created by SUYIYA on 16/8/28.
 */

'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import  MainPage from './MainPage';

export  default class SplashPage extends Component {
    componentWillMount() {
        var { navigator } = this.props;
        setTimeout(() => {
            navigator.replace({
                title: '股宝',
                component: MainPage,
            });
        }, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>welcome to wantplus</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:(Platform.OS === 'android' ? 0 : 20),
        flex: 1,
    },
});