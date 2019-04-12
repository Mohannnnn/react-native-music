/**
 * 配置导航入口文件
 */
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import DiscoverScreen from './discover';
import MineScreen from './mine';
import AccountScreen from './account';
import SongDetailScreen from '../containers/songDetail/index';
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

//创建底部Tab导航
const BottomTabNavigator = createBottomTabNavigator({
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: {
            title: '发现',
            tabBarLabel: '发现',
            // tabBarVisible: false,
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name={'ios-home'} size={25} color={tintColor}></Ionicons>
            },
        }
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name={'ios-musical-notes'} size={25} color={tintColor}></Ionicons>
            },
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            title: '账户',
            tabBarLabel: '账户',
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name={'ios-person'} size={25} color={tintColor}></Ionicons>
            },
        }
    },
}, {
    initialRouteName: 'Discover', //初始化路由名称
    initialRouteParams: {}, //初始化路线参数
    tabBarOptions: { //bar选项
        activeTintColor: '#1890ff', //活动选项卡的标签和图标颜色。
        inactiveTintColor: '#969696', //非活动选项卡的标签和图标颜色。
        labelStyle: {
            fontSize: 12,
        }, // 选项卡标签的样式对象。
        tabStyle: {
            backgroundColor: '#fff',
        }, //选项卡的样式对象。
        style: {
            backgroundColor: '#fff',
            // flex : 1,
            // flexDirection : 'row',
            // justifyContent : 'center',
            // alignItems : 'center',
            paddingTop: 10,
            height:50,
            borderTopWidth: 0,
        }, // 标签栏的样式对象。
    }
});

//创建最外层堆栈导航
const StackNavigator = createStackNavigator({
    BottomTab: {
        screen: BottomTabNavigator,
        navigationOptions: {
            headerTitle : '一级导航条',
            headerBackTitle: null,
            header: null,
        }
    },
    SongDetail: {
        screen: SongDetailScreen,
        navigationOptions : {
            // title : '歌曲详情',
            headerTitle: '歌曲详情',
            headerBackTitle: null,
        }
    },
},{
    initialRouteName: 'BottomTab', //初始化路由名称
    initialRouteParams: {}, //初始化路线参数
    defaultNavigationOptions: { //屏幕的默认导航选项
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
        }
    },
    mode: 'card', //'card'或者modal 
})

export default createAppContainer(StackNavigator);