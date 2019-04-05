import React from 'react';

import { kpi_color } from '../../../utils';

import styled from 'styled-components';

import { 
    Separator, 
    BoldTitle, 
    GrayContent, 
    KpiTag  
} from '../../GlobalStyle';

// styled components:
const StyledQuestion = styled.div`
    margin: 35px 0px;
`

const TagSeparator = styled(Separator)`
    margin: 0px 8px;
    height: 8px;
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
                        <BoldTitle>{question.title}</BoldTitle>
                        <GrayContent>{question.body}</GrayContent>
                        <AnswerTag>
                            {props.answers.filter((answer) => 
                                answer.questionId === question.id).length} answers
                        </AnswerTag>
                        <TagSeparator/>
                        <KpiTag color={kpi_color(question.kpi)}>
                            {question.kpi}
                        </KpiTag>

                    </StyledQuestion>
                )
            })}
        </div>

    )
}

export default Discover;