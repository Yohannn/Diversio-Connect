import { 
    FETCH_RESOURCES_ARTICLES_SUCCESS,
 } from '../actions/types';

const INITIAL_STATE = {
    articles: []
    // popular:
    // trending:
    // regulatory:
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESOURCES_ARTICLES_SUCCESS:
            return { ...state, articles: [...state.articles, ...action.payload]}
        default:
            return state;
    }

}