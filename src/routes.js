import React from 'react';
import { Route } from 'react-router-dom';


import Home from './components/Dashboard/Home';
import Analyze from './components/Dashboard/Analyze';
import Connect from './components/Connect/';



export default (
    <div className="content-container">
        <Route exact path='/' component={ Home }/>
        <Route exact path='/analyze' component={ Analyze }/>
        <Route exact path='/connect' component={ Connect }/>
    </div>
)

