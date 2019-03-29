import React from 'react';
import { Link } from 'react-router-dom';
import logo from './diversio.logo.png'
import signout from './signout.svg';

import styled from 'styled-components';

// styled components:
const NavBarContainer = styled.div`
    position: absolute;
    width: 255px;
    min-height: 100%;
    text-align: center;
    background-color: #FFF;
    box-shadow: 1px 0 0 0 #F0F3F4;
`
const NavbarLogo = styled.img`
    margin: 30px 0;
    width: 78px;
`

const NavbarList = styled.ul`
    text-align: left;
    padding-left: 0;
`

const NavbarListItem = styled.li`
    line-height: 65px;
    
    ${({ selected }) => selected && `
        ::before {
            content: "";
            width: 6px;
            background: #5E77FF;
            height: 65px;
            position: absolute;
    }`}
`
const StyledLink = styled(Link)`
    margin-left: 24px;
    color: #5E77FF;
    text-decoration: none;
    text-transform: uppercase;
`

const SignOutContainer = styled.div`
    text-align: left;
    display: flex;
    padding-left: 25px;
`

const SignOutImg = styled.img`
     width: 16px;
`

const SignOutLink = styled.a`
    color: #939EAB !important;
    text-decoration: none;
    font-size: 14px;
    line-height: 25px;
    margin-left: 13px;
`


// React component:
const pathIsEqual= (currPathName) => {
    const path = window.location.pathname;
    // Temporary solution
    //for avoiding error on passing non-standard attribute 'opened'.
    return path === currPathName ? 1 : 0;
}

const pathIsStartedBy = (currPathName) => {
    const path = window.location.pathname;
    // Temporary solution
    //for avoiding error on passing non-standard attribute 'opened'.
    return path.startsWith(currPathName) ? 1 : 0;

}

const NavBar = () => {
    const path = window.location.pathname;
    
    return (
        <NavBarContainer>
            <NavbarLogo src={ logo } alt="Diversio global" />
            <NavbarList>
                <NavbarListItem selected={pathIsEqual('/')}>
                    <StyledLink to="/">Home</StyledLink>
                </NavbarListItem>
                <NavbarListItem selected={pathIsEqual('/analyze')}>
                    <StyledLink to="/analyze">Analyze</StyledLink>
                </NavbarListItem>
                <NavbarListItem selected={pathIsEqual('/improve')}>
                    <StyledLink to="/improve">Improve</StyledLink>
                </NavbarListItem>
                <NavbarListItem selected={pathIsEqual('/leverage')}>
                    <StyledLink to="/leverage">Leverage</StyledLink>
                </NavbarListItem>
                <NavbarListItem selected={pathIsEqual('/learn-more')}>
                    <StyledLink to="/learn-more">Learn More</StyledLink>
                </NavbarListItem>
                <NavbarListItem selected={pathIsStartedBy('/connect')}>
                    <StyledLink to="/connect/pilots">Connect</StyledLink>
                </NavbarListItem>
            </NavbarList>
            <SignOutContainer>
                <SignOutImg src={ signout } alt="" />
                <SignOutLink href="">Sign out</SignOutLink>
            </SignOutContainer>
        </NavBarContainer>
    )
};

export default NavBar;