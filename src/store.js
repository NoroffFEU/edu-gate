import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import loadingReducer from './reducers/loadingReducer';


const logger = createLogger();


export const initialState = {
  users: [],
  results: [],
  schools: [],
  loading: false
};

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export const persistor = persistStore(store);
