/**
 * 配置发现页堆栈导航
 */
import { createStackNavigator } from "react-navigation";
import DiscoverScreen from '../containers/discover/index';
import AlbumScreen from '../containers/discover/album';

const DiscoverNavigator = createStackNavigator({
    Discover: {
        screen: DiscoverScreen,
    },
    Album: {
        screen: AlbumScreen,
        navigationOptions: {
            // title: '专辑',
            headerTitle: '专辑',
        }
    },
}, {
    initialRouteName: 'Discover', //初始化路由名称
    initialRouteParams: {}, //初始化路线参数
    defaultNavigationOptions: { //屏幕的默认导航选项
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
        }
    },
    mode: 'card', //'card'或者modal 
});
export default DiscoverNavigator;