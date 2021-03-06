import React from 'react';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import App from './App'

function Root({ store }) {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}

export default Root;
