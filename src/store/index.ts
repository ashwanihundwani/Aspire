import { createStore, compose, applyMiddleware } from 'redux';


import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'; // where reducers is a object of reducers
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store