import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Analyze from './containers/Analyze';

export default (
    <div className="content-container">
        <Route exact path='/' component={ Home }/>
        <Route exact path='/analyze' component={ Analyze }/>
    </div>
)