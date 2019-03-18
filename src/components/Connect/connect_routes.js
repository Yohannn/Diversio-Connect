import React from 'react';
import { Route } from 'react-router-dom';

import Pilots from './Pilots/Pilots';
import Topics from './Topics/Topics';
import Resources from './Resources/Resources';
import Experts from './Experts/Experts';


export default (
    <div className="content-container">
        <Route exact path='/connect/pilots' component={ Pilots }/>
        <Route exact path='/connect/topics' component={ Topics }/>
        <Route exact path='/connect/resources' component={ Resources }/>
        <Route exact path='/connect/experts' component={ Experts }/>
    </div>
)

