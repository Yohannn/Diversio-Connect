import React from 'react';

import { kpi_color } from '../../../utils';

import styled from 'styled-components';
import { 
    QuestionTitle, 
    QuestionContent, 
    QuestionKpi 
} from './Topics';
import { Separator } from '../../GlobalStyle';

// styled components:
const StyledQuestion = styled.div`
    margin: 35px 0px;
`

const TagSeparator = styled(Separator)`
    margin: 0px 8px;
    height: 12px;
    display: inline-block;
`
const AnswerTag  = styled.span`
    height: 23px;	
    color: #939EAB;	
    font-size: 9px;	
    line-height: 23px;    
`


// React components:
const Discover = (props) => { 
    
    return (
        <div>
            {props.questions.map((question) => {
                return (
                    <StyledQuestion key={question.id}>
                        <QuestionTitle>{question.title}</QuestionTitle>
                        <QuestionContent>{question.body}</QuestionContent>
                        <AnswerTag>
                            {props.answers.filter((answer) => 
                                answer.questionId == question.id).length} answers
                        </AnswerTag>
                        <TagSeparator/>
                        <QuestionKpi color={kpi_color(question.kpi)}>
                            {question.kpi}
                        </QuestionKpi>

                    </StyledQuestion>
                )
            })}
        </div>

    )
}

export default Discover;