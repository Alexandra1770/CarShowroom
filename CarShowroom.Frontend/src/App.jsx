import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Header from '../src/components/Header';
import reducers from '../src/store/reducers';


/*import '../styles/index.css'*/;

const store = createStore(reducers);
const App = () => (
    <Provider store={store}>
        <Fragment>
            <Header/>
        </Fragment>
    </Provider>
);
export default App;
