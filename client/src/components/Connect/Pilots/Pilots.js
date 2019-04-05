import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConnectWrapper from '../ConnectWrapper';
import { stringToColour } from '../../../utils';
import { fetchPilotsProjects } from '../../../actions';

import { Container, Row, Col } from 'reactstrap';
import Slider from 'rc-slider';

import { Card, SubHeader } from '../../GlobalStyle';

import styled from 'styled-components';
import 'rc-slider/assets/index.css';

//styled components:
const PilotProject = styled.div`
    margin-bottom: 80px;
`

const LearnMoreLink = styled.a`
    text-decoration: none;
    color: #5E77FF;	
    font-family: Lato;	
    font-size: 14px;	
    font-weight: 500;	
    line-height: 15px;
`

const StyledRow = styled(Row)`
    padding-top: 15px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const CompanyNameTag = styled.span`
    background-color: ${props => stringToColour(props.companyName)};
    padding: 6px 14px 6px 14px;
    font-size: 10px;
    color: white;
    height: 25px;	
    width: 78px;	
    border-radius: 4px;	
    white-space: nowrap;
`

const ButtonLink = styled.a`
    background-color:#5E77FF;;
    border: none;
    color: white !important;
    padding: 7px 18px 7px 18px;
    text-align: center;
    font-size: 10px;
    border-radius: 14px; 
    white-space: nowrap;

    &:hover{
        text-decoration: none;
    }
`

// React component:
const marks = {
    25: 'Pre-launch',
    50: 'Launch',
    75: 'Feedback',
    100: 'Impact',
  };

const marks_reverse = {
    'default': 0,
    'pre-launch': 25,
    'launch': 50,
    'feedback': 75,
    'impact': 100,
};


class Pilots extends Component {
    
    state = { appName: "pilots" }

    componentDidMount(){
        this.props.fetchPilotsProjects();
    }

    renderProgressTracker(project) {
        return (
            <PilotProject>
                <SubHeader>{project.title}</SubHeader>
                <LearnMoreLink href="https://google.com">Learn More ></LearnMoreLink>
                    <StyledRow>
                        <Col sm="2">
                            <CompanyNameTag companyName={project.companyName} >
                                {project.companyName}
                            </CompanyNameTag>
                        </Col>
                        <Col>
                            <Slider 
                                dots
                                dotStyle={{ backgroundColor: 'transparent'}}
                                activeDotStyle={{ backgroundColor: 'transparent' }}
                                trackStyle={{ backgroundColor: 'transparent' }}
                                handleStyle={{
                                borderColor: '#5E77FF',
                                backgroundColor: '#5E77FF',
                                    }}
                                marks={marks} step={25} defaultValue={0}
                                value={marks_reverse[project.progress]}
                            />
                        </Col>
                        <Col className="text-right" sm="2" >
                            <ButtonLink href="https://google.com" target="black">
                                Case Study
                            </ButtonLink>
                        </Col>
                    </StyledRow>
            </PilotProject>
        )
    }

    render() {
        // Waiting for data to be fetched.
        if (this.props.projects.length === 0) {
            return ( <div>Loading...</div>)
        }

        return (
            <ConnectWrapper title={this.state.appName}>
                <Card>
                    <Container fluid>
                        {this.props.projects.map((project) => {
                            return (
                                <React.Fragment key={project.id}>
                                    {this.renderProgressTracker(project)}
                                </React.Fragment>
                            )
                        })}
                    </Container>
                </Card>
            </ConnectWrapper>
        )
    }
};


const mapStateToProps = (state) => {
    return { projects: Object.values(state.pilots) }    
}

export default connect(mapStateToProps, {
    fetchPilotsProjects
})(Pilots);
