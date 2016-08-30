/**
 * Created by SUYIYA on 16/8/30.
 */

'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';

export  default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, backgroundColor: 'yellow'}}>
                    <Text>welcome to home</Text>
                </View>
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