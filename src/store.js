import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(sagaMiddleware)
	);
	sagaMiddleware.run(rootSaga);
	return store;
};

export default configureStore;
