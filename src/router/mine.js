/**
 * 配置我的页堆栈导航
 */
import { createStackNavigator } from "react-navigation";
import MineScreen from '../containers/mine/index';

const MineNavigator = createStackNavigator({
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            title: '我的',
            headerBackTitle: null,
        }
    },
}, {
    initialRouteName: 'Mine', //初始化路由名称
    initialRouteParams: {}, //初始化路线参数
    defaultNavigationOptions: { //屏幕的默认导航选项
        headerStyle: {
            backgroundColor: '#ccc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
        }
    },
    mode: 'card', //card或者modal 
});
export default MineNavigator;