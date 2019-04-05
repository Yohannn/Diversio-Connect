import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Dashboard/Home';
import Analyze from './components/Dashboard/Analyze';
import Improve from './components/Dashboard/Improve';
import Leverage from './components/Dashboard/Leverage';
import LearnMore from './components/Dashboard/LearnMore';

import Pilots from './components/Connect/Pilots/Pilots';
import Topics from './components/Connect/Topics/Topics';
import Resources from './components/Connect/Resources/Resources';
import Experts from './components/Connect/Experts/Experts';


// styled-components
const ContentContainer = styled.div`
    margin-left: 255px;
    padding: 40px;
`

export default (
    <ContentContainer>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/analyze' component={ Analyze }/>
        <Route exact path='/improve' component={ Improve }/>
        <Route exact path='/leverage' component={ Leverage }/>
        <Route exact path='/learn-more' component={ LearnMore }/>

        <Route exact path='/connect/pilots' component={ Pilots }/>
        <Route exact path='/connect/topics' component={ Topics }/>
        <Route exact path='/connect/resources' component={ Resources }/>
        <Route exact path='/connect/experts' component={ Experts }/>
    </ContentContainer>
)

