import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import pilotsReducer from './pilotsReducer';
import topicsReducer from './topicsReducer';

export default combineReducers({
  
    pilots: pilotsReducer,
    topics: topicsReducer
    // form: formReducer
});


// const defaultState = {
//     inTraffic: false,
//     isInitialized: false
// };


// export default (state = defaultState, action) => {
//     try {

//         switch(action.type) {

//             case 'TESTING':
//                 console.log('Im here')
//                 return {
//                     ...state,
//                     inTraffic: true
//                 };

//             default:
//                 return state;

//         }

//     } catch(error) {
//         console.error(`Error in appState reducer: ${ error.message || error.code || error }`, error);
//     }

// };