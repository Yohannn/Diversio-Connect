import React, { Component } from 'react';

import ConnectWrapper from '../ConnectWrapper';
import { obtainLastSegment } from '../../../utils';

import './Topics.css';

class Topics extends Component {


    render () {
        const appName = obtainLastSegment(this.props.match.path)
        return (
            <ConnectWrapper title={appName}>
                <div className="card">
                    This is Topics Page.
                </div>
            </ConnectWrapper>
        )
    }
};

export default  Topics;
