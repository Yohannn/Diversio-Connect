import React, { Component } from 'react';
import ConnectWrapper from '../ConnectWrapper';
import { obtainLastSegment } from '../../../utils';

// import './Topics.css';

class Experts extends Component {
    render () {
        const appName = obtainLastSegment(this.props.match.path)

        return (
            <ConnectWrapper title={appName}>
                <div className="card">
                    This is Experts Page.
                </div>
            </ConnectWrapper>
        )
    }
};

export default  Experts;
