import React, { Component } from 'react';
import ConnectWrapper from '../ConnectWrapper';
import { Card } from '../../GlobalStyle';

class Resources extends Component {
    
    state = { appName: "resources" }
    render () {

        return (
            <ConnectWrapper title={this.state.appName}>
                <Card>
                    This is Resources Page.
                </Card>
            </ConnectWrapper>
        )
    }
};

export default  Resources;
