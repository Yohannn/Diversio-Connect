import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from '../../routes';
import NavBar from '../NavBar';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    { routes }
                </div>
            </BrowserRouter>
        );
    }
}
export default Dashboard;
