import React, { Component } from 'react';
import ConnectWrapper from '../ConnectWrapper';
import { obtainLastSegment } from '../../../utils';

// import './Topics.css';

class Resources extends Component {
    render () {
        const appName = obtainLastSegment(this.props.match.path)

        return (
            <ConnectWrapper title={appName}>
                <div className="card">
                    This is Resources Page.
                </div>
            </ConnectWrapper>
        )
    }
};

export default  Resources;
