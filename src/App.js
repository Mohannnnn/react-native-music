import React from 'react';
import { Provider } from 'react-redux';
import RNSplashScreen from 'react-native-splash-screen';
import configureStore from './store/configureStore';
import rootSaga from './sagas/index.js';
import Routes from './router/index';

const store = configureStore();
// store.runSaga(rootSaga);
export default class App extends React.Component{
  componentDidMount(){
    RNSplashScreen.hide();
  }
  render(){
    return(
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
