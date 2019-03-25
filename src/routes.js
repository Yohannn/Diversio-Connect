import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Dashboard/Home';
import Analyze from './components/Dashboard/Analyze';
import Pilots from './components/Connect/Pilots/Pilots';
import Topics from './components/Connect/Topics/Topics';
import Resources from './components/Connect/Resources/Resources';
import Experts from './components/Connect/Experts/Experts';

import './components/App.css';

export default (
    <div className="content-container">
        <Route exact path='/' component={ Home }/>
        <Route exact path='/analyze' component={ Analyze }/>
        <Route exact path='/connect/pilots' component={ Pilots }/>
        <Route exact path='/connect/topics' component={ Topics }/>
        <Route exact path='/connect/resources' component={ Resources }/>
        <Route exact path='/connect/experts' component={ Experts }/>
    </div>
)