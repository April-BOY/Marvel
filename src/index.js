import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer.js'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './container/login/login';
import Register from './container/register/register';
import './index.css';

const store = createStore(
    // reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));