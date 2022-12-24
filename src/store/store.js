import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from './root.saga';
import userReducer from './user/user.slice'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    user: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

export default store;

sagaMiddleware.run(rootSaga);
