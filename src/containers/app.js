import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from '../store/reducer'
import 'Assets/global/style/global.css';

import { Resume } from 'Containers/resume'


const logger = store => next => action => {
    console.group(action.type)
    console.group(action.type)
    console.log('current state', store.getState())
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const middleware = [thunk, logger]
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default () => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Resume} />
            <Route component={() => (<h1>notfound</h1>)} />
        </Switch>
    </Provider>
)