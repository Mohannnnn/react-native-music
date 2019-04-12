import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const middlewares = []; //中间件列表
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__) {
    middlewares.push(createLogger());
}

const initialState = {}; //初始化state
export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}