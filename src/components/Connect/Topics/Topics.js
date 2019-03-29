import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import ConnectWrapper from '../ConnectWrapper';
import TopicsTab from './TopicsTab';
import Discover from './Discover';
import Answer from './Answer';

import { fetchTopicQuestions, fetchTopicAnswers } from '../../../actions';

import styled from 'styled-components';
import { Card, SubHeader } from '../../GlobalStyle';
import { kpi_color } from '../../../utils';


//styled components:
const FeaturedQuestion = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
`

export const QuestionTitle = styled.div`
    height: 23px;	
    color: #2A2C2E;	
    font-family: Lato;	
    font-size: 16px;	
    font-weight: bold;	
    line-height: 23px;
    /* margin-top: 20px; */
`

export const QuestionContent = styled.div`
    /* height: 30px;	 */
    /* max-width: 400px;	 */
    width: 100%;
    color: #2A2C2E;	
    font-family: Lato;	
    font-size: 0.8rem;	
    font-weight: 300;	
    margin-top: 6px;
    padding-bottom: 5px;
    
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

export const QuestionKpi = styled.span`
    color : ${({ color }) => color};
    height: 20px;	
    width: 100%;	
    font-family: Lato;	
    font-size: 10px;	
    line-height: 20px;
    
    /* margin-top: 8px; */
`


// React components:
class Topics extends Component {
    
    state = { appName: "topics" }

    componentDidMount() {
        this.props.fetchTopicQuestions();
        this.props.fetchTopicAnswers();
    }

    renderFeaturedQuestion() {
        // Featured question not fetched yet.
        if (!this.props.featured) {
            return ( <div>Loading...</div>)
        }

        return (
            <React.Fragment>
                <SubHeader>Featured</SubHeader>
                <FeaturedQuestion>
                    <QuestionTitle>{this.props.featured.title}</QuestionTitle>
                    <QuestionContent>{this.props.featured.body}</QuestionContent>
                    <QuestionKpi color={kpi_color(this.props.featured.kpi)}>
                        {this.props.featured.kpi}
                    </QuestionKpi>
                </FeaturedQuestion>
            </React.Fragment>
        )    
    }


    render () {
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
    fetchTopicQuestions,
    fetchTopicAnswers
})(Topics);

