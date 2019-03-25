import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from './diversio.logo.png'
import signout from './signout.svg';
import './navbar.css'

const NavBar = (props) => {
    const path = window.location.pathname;

    return (
        <div className="NavBar" id="navbar">
            <img src={ logo } className="navbar_logo" alt="Diversio Global"/>
            <ul className="navbar_list">
                <li className={ classNames({ selected: path === '/' }) }>
                    <Link to="/">Home</Link>
                </li>
                <li className={ classNames({ selected: path === '/analyze' }) }>
                    <Link to="/analyze">Analyze</Link>
                </li>
                <li className={ classNames({ selected: path === '/improve' }) }>
                    <Link to="/improve">Improve</Link>
                </li>
                <li className={ classNames({ selected: path === '/leverage' }) }>
                    <Link to="/leverage">Leverage</Link>
                </li>
                <li className={ classNames({ selected: path === '/learn-more' }) }>
                    <Link to="/learn-more">Learn More</Link>
                </li>
                <li className={ classNames({ selected: path.startsWith('/connect') }) }>
                    <Link to="/connect/pilots">Connect</Link>
                </li>
            </ul>
            <div className="navbar_signout-container">
                <img src={ signout } alt=""/>
                <a href="" className="navbar_signout">Sign out</a>
            </div>
        </div>
    )
};

export default NavBar;

