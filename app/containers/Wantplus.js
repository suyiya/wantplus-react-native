/**
 * Created by SUYIYA on 16/8/28.
 */

'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native';

import SplashPage from './Splash';

export default class Wantplus extends Component {
    constructor() {
        super();
    }

    render() {
        var defaultName = 'Splash';
        var defaultComponent = SplashPage;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
                }}
                //sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 64)}}
                //navigationBar={this._renderNavBar()}
            />
        );
    }
}