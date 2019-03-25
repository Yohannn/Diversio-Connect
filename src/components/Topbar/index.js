import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Nav, NavItem } from 'reactstrap';

import './Topbar.css';
class Topbar extends Component {

    
    
    giveTabClassName(tabName){
        const path = window.location.pathname;
        const classname = classNames({
            clicked: path === `/connect/${tabName}`,
            buttons: path !== `/connect/${tabName}`
          });
        return classname;
    }
    

    render() {
        return (
          <div className="topBar">
            <Nav horizontal="between">
                <NavItem className={this.giveTabClassName("pilots")}>
                  <Link to='/connect/pilots'>Pilots</Link>
                </NavItem>
                <span className="line"/>
                <NavItem className={this.giveTabClassName("topics")}>
                  <Link to='/connect/topics'>Topics</Link>
                </NavItem>
                <span className="line"/>
                <NavItem className={this.giveTabClassName("resources")}>
                  <Link to='/connect/resources'>Resources</Link>
                </NavItem>
                <span className="line"/>
                <NavItem className={this.giveTabClassName("experts")}>
                  <Link to='/connect/experts'>Experts</Link>
                </NavItem>
            </Nav>
          </div>


        );
      }
}
    
    
export default Topbar;
