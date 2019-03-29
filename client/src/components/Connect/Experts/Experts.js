import React, { Component } from 'react';
import ConnectWrapper from '../ConnectWrapper';
import { Card } from '../../GlobalStyle';

class Experts extends Component {

    state = { appName: "experts" } 

    render () {

        return (
            <ConnectWrapper title={this.state.appName}>
                <Card>
                    This is Experts Page.
                </Card>
            </ConnectWrapper>
        )
    }
};

export default  Experts;
