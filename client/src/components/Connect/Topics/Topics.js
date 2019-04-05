import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import ConnectWrapper from '../ConnectWrapper';
import TopicsTab from './TopicsTab';
import Discover from './Discover';
import Answer from './Answer';

import { fetchTopicsQuestions, fetchTopicsAnswers } from '../../../actions';

import styled from 'styled-components';
import { 
    Card, SubHeader, 
    BoldTitle, GrayContent, 
    KpiTag } from '../../GlobalStyle';
import { kpi_color } from '../../../utils';


//styled components:
const FeaturedQuestion = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
`

// React components:
class Topics extends Component {
    
    state = { appName: "topics" }

    componentDidMount() {
        this.props.fetchTopicsQuestions();
        this.props.fetchTopicsAnswers();
    }

    renderFeaturedQuestion() {
        
        return (
            <React.Fragment>
                <SubHeader>Featured</SubHeader>
                <FeaturedQuestion>
                    <BoldTitle>{this.props.featured.title}</BoldTitle>
                    <GrayContent>{this.props.featured.body}</GrayContent>
                    <KpiTag color={kpi_color(this.props.featured.kpi)}>
                        {this.props.featured.kpi}
                    </KpiTag>
                </FeaturedQuestion>
            </React.Fragment>
        )    
    }


    render () {
        // Waiting for data to be fetched.
        if (!this.props.featured) {
            return ( <div>Loading...</div>)
        }
        return (
            <ConnectWrapper title={this.state.appName}>
                <Card>
                    {this.renderFeaturedQuestion(this.props.featured)}                    
                    <TopicsTab>
                        <Discover questions={this.props.questions} answers={this.props.answers} />
                        <Answer />
                    </TopicsTab>
                </Card>
            </ConnectWrapper>
        )
    }
};



// Randomly select one question as a featured.
// <To be changed according to feature selecting algorithm>.
const selectFeaturedQuestion = (questions) => {
    // select random question.
    const featured = questions[_.random(0, questions.length-1)];
    // Filter in the rest of the questions.
    const rest = _.filter(questions, function(question){ return question.id !== featured.id });
    return [featured, rest];
}

const mapStateToProps = (state) => {
    const questions = Object.values(state.topics.questions);
    const answers = Object.values(state.topics.answers);

    const [featured, rest] = selectFeaturedQuestion(questions)

    return { 
        featured: featured,
        questions: rest,
        answers: answers
    }; 
}


export default connect(mapStateToProps, {
    fetchTopicsQuestions,
    fetchTopicsAnswers
})(Topics);

