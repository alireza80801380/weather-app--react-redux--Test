import { configureStore, } from "@reduxjs/toolkit";
import ReducerWeather from "./Redux/reducerWeather";
import createSagaMiddleware from 'redux-saga'
import {Wacher, Wacher2 } from "./Redux/ActionWeather";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const Store = configureStore({
    reducer : ReducerWeather,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(Wacher)
sagaMiddleware.run(Wacher2)

export default Store