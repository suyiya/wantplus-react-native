/**
 * Created by SUYIYA on 16/8/28.
 */

'use strict';

import React, { Component, TouchableOpacity } from 'react';
import { View, StyleSheet, Navigator, Image, Text, TextInput } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home';
import Shop from './Shop';
import Feature from './Feature';
import Me from './Me';

export  default class TabBar extends  Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: 'home',
            showTabBar: true,
        };
    }

    render() {
        const { navigator } = this.props;
        let tabBarStyle = {};
        let sceneStyle = {};
        if (!this.state.showTabBar) {
            tabBarStyle.height = 0;
            tabBarStyle.overflow = 'hidden';
            sceneStyle.paddingBottom = 0;
        }

        return (
            <TabNavigator tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_home.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_home_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商店"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_strategy.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_strategy_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <Shop />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'simulate'}
                    title="特色"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_simulate.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_simulate_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'simulate' })}>
                    <Feature />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title="我"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_news.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_news_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    <Me />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    _toggleTabBarVisibility() {
        this.setState(state => ({
            showTabBar: !state.showTabBar,
        }));
    }
}