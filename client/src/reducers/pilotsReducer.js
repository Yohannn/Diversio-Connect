import { FETCH_PILOT_PROJECTS_SUCCESS } from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PILOT_PROJECTS_SUCCESS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}


