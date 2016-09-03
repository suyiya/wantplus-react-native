/**
 * Created by SUYIYA on 16/8/30.
 */

'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import utils from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';

export  default class Home extends Component {

    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <Icon name="ios-search" size={25} color="white" style={{position:'absolute', right: 10, top: 30}}/>
                </View>
                <View style={{flex: 1, backgroundColor: 'yellow'}}>
                    <Text>welcome to home</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav:{
        height: 64,
        backgroundColor: utils.mainColor
    }
});