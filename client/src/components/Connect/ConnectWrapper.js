import React from 'react';
import Topbar from './Topbar';
import _ from 'lodash';

import styled from 'styled-components';

//styled components:
const SubAppHeader = styled.div`
    margin-left: 40px;
    margin-top: 20px;
    height: 20px;
    width: 81px;
    color: #525A64;
    font-family: Lato;
    font-size: 28px;
    font-weight: 500;
    line-height: 20px;
`

// React component:
const ConnectWrapper = (props) => {
    return (
        <div>
            <SubAppHeader>{_.capitalize(props.title)}</SubAppHeader>
            <Topbar />
            {props.children}
        </div>   
    )
}

export default ConnectWrapper;

