import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import pilotsReducer from './pilotsReducer';
import topicsReducer from './topicsReducer';
import resourcesReducer from './resourcesReducer';
import expertsReducer from './expertsReducer';



export default combineReducers({
  
    pilots: pilotsReducer,
    topics: topicsReducer,
    resources: resourcesReducer,
    experts: expertsReducer
    // form: formReducer
});
