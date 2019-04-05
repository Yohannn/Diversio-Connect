import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import styled from 'styled-components';
import { Separator } from '../GlobalStyle';

//styled components:
const StyledTopBar = styled.div`
  margin-left: 80px;
  margin-right: 110px;
  margin-top: 40px;
  max-width: 45vw;
`
const StyledLink = styled(Link)`
  color: ${ props => props.opened ? '#5E77FF' : '#525A64' } !important;
  font-family: Lato; 
  font-size: 18px;   
  font-weight: 500;  
  line-height: 20px;  
`



// React components:
const isOpened = (tabName) => {
    const path = window.location.pathname;
    // Temporary solution
    //for avoiding error on passing non-standard attribute 'opened'.
    return path === `/connect/${tabName}` ? 1 : 0;
}

const Topbar = () => {
    return (
        <StyledTopBar>
          <Nav horizontal="between">
              <NavItem>
                <StyledLink to='/connect/pilots' opened={isOpened('pilots')}>
                  Pilots
                </StyledLink>
              </NavItem>
              <Separator />
              <NavItem>
                <StyledLink to='/connect/topics' opened={isOpened('topics')}>
                  Topics
                </StyledLink>
              </NavItem>
              <Separator /> 
              <NavItem>
                <StyledLink to='/connect/resources' opened={isOpened('resources')}>
                  Resources
                </StyledLink>
              </NavItem>
              <Separator />
              <NavItem>
                <StyledLink to='/connect/experts' opened={isOpened('experts')}>
                  Experts
                </StyledLink>
              </NavItem>
          </Nav>
        </StyledTopBar>
    );
      
}
    

export default Topbar;
