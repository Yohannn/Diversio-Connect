import { 
    FETCH_TOPICS_QUESTIONS_SUCCESS,
    FETCH_TOPICS_ANSWERS_SUCCESS,
 } from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    questions: {},
    answers: {},
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TOPICS_QUESTIONS_SUCCESS:
            return {...state, questions: { ...state.questions, ..._.mapKeys(action.payload, 'id')}}
        case FETCH_TOPICS_ANSWERS_SUCCESS:
            return {...state, answers: {...state.answers, ..._.mapKeys(action.payload, 'id')}}
        default:
            return state;
    }

}