import React, { Component } from 'react';
import { connect } from 'react-redux'

import ConnectWrapper from '../ConnectWrapper';
import { stringToColour, obtainLastSegment } from '../../../utils';
import { fetchPilotProjects } from '../../../actions';

import { Container, Row, Col } from 'reactstrap';
import Slider from 'rc-slider';

import './Pilots.css'
import 'rc-slider/assets/index.css';


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
    
    componentDidMount(){
        this.props.fetchPilotProjects();
    }


    renderProgressTracker(project) {
        return (
            <div className="pilot">
                <div className="title">{project.title}</div>
                <a className="learnMore" href="https://google.com">Learn More ></a>
                    <Row className="align-items-center justify-content-between">
                        <Col className="text-left" sm="2">
                            <span style={{backgroundColor: `${stringToColour(project.title)}`}} className="companyRectangle">
                                {project.companyName}
                            </span>
                        </Col>
                        <Col className="center">
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
                            <a href="https://google.com" target="_blank">
                                  <span className="caseButton">Case Study</span>
                            </a>
                        </Col>
                    </Row>
            </div>
        )
    }

    render() {
        const appName = obtainLastSegment(this.props.match.path)
        return (
            <ConnectWrapper title={appName}>
                <div className="card">
                    <Container fluid>
                        {this.props.projects.map((project) => {
                            return (
                                <React.Fragment key={project.id}>
                                    {this.renderProgressTracker(project)}
                                </React.Fragment>
                            )
                        })}
                    </Container>
                </div>
            </ConnectWrapper>
        )
        
    }
};


const mapStateToProps = (state) => {
    return { projects: Object.values(state.pilots) }    
}

export default connect(mapStateToProps, {
    fetchPilotProjects
})(Pilots);
