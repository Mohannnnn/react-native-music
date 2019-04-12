/**
 * 配置账户页堆栈导航
 */
import { createStackNavigator } from "react-navigation";
import AccountScreen from '../containers/account/index';

const AccountNavigator = createStackNavigator({
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            title: '账户',
            headerBackTitle: null,
        }
    }
}, {
    initialRouteName: 'Account', //初始化路由名称
    initialRouteParams: {}, //初始化路线参数
    mode: 'card', //'card'或者modal 
});
export default AccountNavigator;