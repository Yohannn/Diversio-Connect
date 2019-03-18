import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard/';

const App = ({ routes, store }) => {
    return (
        <Provider store = { store }>
            <Dashboard />
        </Provider>
    ); 
}

export default App;
