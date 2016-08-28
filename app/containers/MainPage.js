/**
 * Created by SUYIYA on 16/8/28.
 */

'use strict';

import React, { Component, TouchableOpacity } from 'react';
import { View, StyleSheet, Navigator, Image, Text, TextInput } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const HOME_TAB = 'homeTab';
const STRATEGY_TAB = 'strategyTab';
const SIMULATE_TAB = 'simulateTab';
const NEWS_TAB = 'newsTab';
const ME_TAB = 'meTab';

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
                    <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'strategy'}
                    title="策略"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_strategy.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_strategy_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'strategy' })}>
                    <View style={{flex: 1, backgroundColor: 'red'}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'simulate'}
                    title="仿真交易"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_simulate.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_simulate_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'simulate' })}>
                    <View style={{flex: 1, backgroundColor: 'green'}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'news'}
                    title="新闻"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_news.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_news_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'news' })}>
                    <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title="我"
                    titleStyle={{color:'grey'}}
                    selectedTitleStyle={{color:'red'}}
                    renderIcon={() => <Image source={require('../images/tabbar/tab_me.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/tabbar/tab_me_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    <View style={{flex: 1, backgroundColor: 'orange'}}></View>
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