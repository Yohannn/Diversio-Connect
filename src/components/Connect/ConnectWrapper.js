import React from 'react';
import Topbar from '../Topbar';
import { capitalizeFirstChar } from '../../utils';
import './ConnectWrapper.css';

const ConnectWrapper = (props) => {
    
    return (
        <div>
            <div className="Header">{capitalizeFirstChar(props.title)}</div>
            <Topbar />
            {props.children}
        </div>   
    )
}

export default ConnectWrapper;