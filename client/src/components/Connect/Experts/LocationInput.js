import React from 'react';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import styled from 'styled-components';

// styled components:
const StyledInputGroup = styled(InputGroup)`
    padding-top: 20px;
    width:  300px !important;
    margin-right: 20px;
`

const StyledInput = styled(Input)`
    font-size: 1rem !important;
    font-family: Lato;
`

const StyledSearchButton = styled(Button)`
    font-size: 0.2rem !important;
    background-color: #5E77FF !important;
    border-color: #5E77FF !important;
`


// React component:
const LocationInput = (props) => {

    return (
        <StyledInputGroup>
            <StyledInput 
                placeholder="Location" 
                value={props.value} 
                onChange={(event) => {props.handleChange(event)}}/>
            <InputGroupAddon addonType="append">
                <StyledSearchButton color="primary" onClick={()=> {alert("Button inactive")}}>
                    <i className="fa fa-search"></i>
                </StyledSearchButton>
            </InputGroupAddon>
        </StyledInputGroup>
    )
}

export default LocationInput;