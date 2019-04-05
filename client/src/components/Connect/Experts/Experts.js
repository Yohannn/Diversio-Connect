import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ConnectWrapper from '../ConnectWrapper';
import LocationInput from './LocationInput';
import Selector from './Selector';
import { fetchExpertsPersonnels } from '../../../actions';
import { topic_color } from '../../../utils';

import { Form, FormGroup, Row, Col, Container } from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Card, SubHeader } from '../../GlobalStyle';
import styled from 'styled-components';

// expert images imported just for demo:
import expert_img0 from '../../../temp_images/connect_experts/0.jpg';
import expert_img1 from '../../../temp_images/connect_experts/1.jpg';
import expert_img2 from '../../../temp_images/connect_experts/2.jpg';
import expert_img3 from '../../../temp_images/connect_experts/3.jpg';
import expert_img4 from '../../../temp_images/connect_experts/4.jpg';



// material ui theme for Form:
const theme = createMuiTheme({
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "Lato",
      ].join(','),
      useNextVariants: true,

    },
    overrides: {
        MuiCheckbox: {
            colorPrimary: {
                '&$checked': {
                    color: "#5E77FF",
                  },
            },
        },
    },
  });

// Expert images:
const expert_images = [expert_img0, expert_img1, expert_img2, expert_img3, expert_img4];

// Possible Topics and Industry options for selectos input:
const topics = ["culture", "networks", "bias", "safety", "leadership"]
const industries = ["technology", "chemical", "marketing", "manufacturing"]

// styled components:
// - form
const SearchButton = styled.button`
    background-color: #5E77FF;
    border: none;
    color: white;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    font-size: 10px;
    cursor: pointer;
    border-radius: 16px;
    margin-top: 20px;
    margin-left: 35px;
    outline: white;
`
const StyledRow = styled(Row)`
    align-items: center;
    flex-wrap: nowrap !important;
`
// - content
const PersonnelCard = styled(Card)`
    margin: 20px 0px;
    padding: 30px 20px;
`

const ExpertsContentContainer = styled.div`
    margin-top: 30px;
`

const PointsTag = styled.div`
    float: right;
    color: #5E77FF;
    margin-right: -5px;
    margin-top: -32px;
`

const StyledPoints = styled.span`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 500;
    
`

const ExpertImg = styled.img`
    border-radius: 50%;
    height: 16vh;
    width: 16vh;
    object-fit: cover;
`
const ExpertPositionLabel = styled.div`
    color: #535b66;
    font-size: 0.8rem;
    margin-top: 15px;
`
const ExpertNameLabel = styled.div`
    margin-bottom:6px;
    font-size: 20px;
    color: black;	
    font-weight: 400;
`
const ExpertOrganizationLabel = styled.span`
    margin-right: 10px;
    color: #5E77FF;	
    font-size: 14px;	
    font-weight: 400;
`
const ExpertLocationLabel = styled.span`
    color: #a6aab2;	
    font-size: 14px;	
    font-weight: 400;	
    word-spacing: 3px;
`

const ExpertDescription = styled.div`
    color: rgb(129, 128, 128);	
    /* font-family: 'Lato', sans-serif;	 */
    font-size: 12px;	
    font-weight: 100;	
    margin-top: 5px;
    margin-bottom: 20px;
`

const ExpertLabelTopics = styled.div`
    font-family: 'Lato', sans-serif;	
    font-size: 12px;	
    font-weight: 400;	
    word-spacing: 3px;
    margin-left: 8px;
    margin-top: 30px;
`

const ExpertsTopicTag = styled.span`
    background-color: ${props => topic_color(props.topic)};
    border: none;
    color: rgb(73, 72, 72);
    padding: 3px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    cursor: pointer;
    border-radius: 16px;
    margin-left: 8px;
    margin-top: 10px;
    outline: white;
    /* float: left; */
`


//React components:
class Experts extends Component {

    state = { 
        appName: "experts", 
        displayingExperts: [],
        location: "", 
        topic: "", 
        industry: "",
        professional: true,
        ambassador: false
        
    }; 


    componentDidMount() {
        this.props.fetchExpertsPersonnels();
    }


    // Changes for each input:
    handleChangeLocation = (event) => {
        this.setState( { location: event.target.value } );
    }
    handleChangeSelector = (event) => {
        this.setState( { [event.target.name]: event.target.value })
    }
    handleChangeCheckbox = (event) => {
        event.target.value === "both" ? this.setState( {
            professional: event.target.checked,
            ambassador: event.target.checked }
            ) : this.setState( { [event.target.value] : event.target.checked })
        
    }

    // logistics for filtering experts based on input values in formSubmitted.
    filterExpertsByForm = (formSubmitted) => {
        const filteredExperts = this.props.personnels.filter((personnel) => {
            return(
            // location check
            (!formSubmitted.location || (personnel.location === formSubmitted.location))
            // topics check
            && (formSubmitted.topic === "all" || personnel.topics.includes(formSubmitted.topic))
            // professional/ambassador check
            && (
                (personnel.position === "professional" && formSubmitted.professional)
                || (personnel.position === "ambassador" && formSubmitted.ambassador)   
                )
            )
        })
        return filteredExperts;

    }
    // Form submission:
    handleFormSubmit = (event) => {
        event.preventDefault();

        // filter based on content of the form.
        const formSubmitted = {
            location: this.state.location,
            topic: this.state.topic,
            industry: this.state.industry,
            professional: this.state.professional,
            ambassador: this.state.ambassador
        }

        // filtering based on form input.
        const filteredExperts = this.filterExpertsByForm(formSubmitted);
        this.setState({ displayingExperts: filteredExperts });
     
    }

    renderExpertForm() {
        return (
            <Form onSubmit={(event) => {this.handleFormSubmit(event)}}>
                <FormGroup>
                    <StyledRow>
                        <LocationInput 
                            handleChange={this.handleChangeLocation} 
                            value={this.state.location} />
                        <Selector 
                            appName="topic" 
                            options={topics}
                            handleChange={this.handleChangeSelector}
                            value={this.state.topic} />
                        <Selector 
                            appName="industry" 
                            options={industries}
                            handleChange={this.handleChangeSelector}
                            value={this.state.industry}
                            />
                        <SearchButton>Search</SearchButton> 
                    </StyledRow>        
                </FormGroup>  
                <FormGroup check inline>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.professional}
                                onChange={(event) => {this.handleChangeCheckbox(event)}}
                                value="professional"
                                color="primary"
                                />
                            }
                        label="Professional" />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.ambassador}
                                onChange={(event) => {this.handleChangeCheckbox(event)}}
                                value="ambassador"
                                color="primary" />
                            }
                        label="Ambassador" />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.professional && this.state.ambassador}
                                onChange={(event) => {this.handleChangeCheckbox(event)}}
                                value="both"
                                color="primary" />
                            }
                        label="Both" />
                </FormGroup>
            </Form>       
        )
    }

    renderEachExpert(personnel) {
        return (
            <PersonnelCard key={personnel.id}>
                <PointsTag>
                    <i className="fas fa-bookmark fa-lg" style={{color: '#5E77FF'}}></i>
                    <StyledPoints>{personnel.points} points</StyledPoints>
                </PointsTag>
                <Row>
                    <Col sm="3" className="text-center">
                        <ExpertImg src={expert_images[personnel.id]}/>
                        <ExpertPositionLabel>{_.capitalize(personnel.position)}</ExpertPositionLabel>
                    </Col>
                    <Col>
                        <ExpertNameLabel>{personnel.name}</ExpertNameLabel>
                        <ExpertOrganizationLabel>{personnel.organization.join(' and ')}</ExpertOrganizationLabel>
                        <ExpertLocationLabel>• {personnel.location}</ExpertLocationLabel>
                        <ExpertDescription>{personnel.description}</ExpertDescription>
                    </Col>
                    <Col>
                        <ExpertLabelTopics>Topics:</ExpertLabelTopics>
                        {personnel.topics.map((topic) => {
                            return (
                                <ExpertsTopicTag key={topic} topic={topic}>
                                    {_.capitalize(topic)}
                                </ExpertsTopicTag>
                                )
                        })}
                    </Col>
                </Row>
            </PersonnelCard>
        )
    }

    renderExpertContent(){
        if (this.props.personnels.length === 0) {
            return <div>Loading...</div>;
        }

        // if (this.state.displayingExperts.length === 0) {
        //     return (
        //         <div> No experts found! Please</div>
        //     )
        // }

        return (
            <ExpertsContentContainer>       
                <div>{this.state.displayingExperts.length} Results</div>
                {this.state.displayingExperts.map((personnel) => {
                    return this.renderEachExpert(personnel);
                })}
            </ExpertsContentContainer>
        )
    }

    render () { 
        
        return (
            <ConnectWrapper title={this.state.appName}>
                <Card>
                    <SubHeader>Find an Expert</SubHeader>
                    <MuiThemeProvider theme={theme}>
                        {this.renderExpertForm()}
                    </MuiThemeProvider>
                    {this.renderExpertContent()}
                </Card>
            </ConnectWrapper>
        )
    }
};


const mapStateToProps = (state) => {

    return { personnels: Object.values(state.experts) };
} 

export default connect(mapStateToProps, {
    fetchExpertsPersonnels
})(Experts);


