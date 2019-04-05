import { put, call, all, takeEvery } from 'redux-saga/effects';
import connect from '../apis/connect';
import news from '../apis/news';
import { 
  FETCH_PILOTS_PROJECTS, 
  FETCH_TOPICS_QUESTIONS,
  FETCH_TOPICS_ANSWERS,
  FETCH_RESOURCES_ARTICLES,
  FETCH_EXPERTS_PERSONNELS,
} from './types';
import { 
    fetchPilotsProjectsSuccess, 
    fetchTopicsQuestionsSuccess,
    fetchTopicsAnswersSuccess,
    fetchResourcesArticlesSuccess,
    fetchExpertsPersonnelsSuccess
  } from '.';

// Connect Sagas
// Pilots:
export function* fetchPilotsProjectsSaga() {
  try {
    const response = yield call(connect.get, '/pilots');
    yield put(fetchPilotsProjectsSuccess(response.data));

  } catch(error){
    console.log(error);
  }  
}

export function* watchfetchPilotsProjectsSaga(){
  yield takeEvery(FETCH_PILOTS_PROJECTS, fetchPilotsProjectsSaga);
}



// Topics:
export function* fetchTopicsQuestionsSaga() {
  try {
    const response = yield call(connect.get, '/topics-questions');
    yield put(fetchTopicsQuestionsSuccess(response.data))
  } catch(error){
    console.log(error);
  }
}

export function* watchfetchTopicsQuestionsSaga() {
  yield takeEvery(FETCH_TOPICS_QUESTIONS, fetchTopicsQuestionsSaga);
}


export function* fetchTopicsAnswersSaga() {
  try{
    const response = yield call(connect.get, '/topics-answers');
    yield put(fetchTopicsAnswersSuccess(response.data))
  } catch(error) {
    console.log(error);
  }
}

export function* watchfetchTopicsAnswersSaga(){
  yield takeEvery(FETCH_TOPICS_ANSWERS, fetchTopicsAnswersSaga);
}


// Resources:
export function* fetchResourcesArticlesSaga() {
  try {
    const response = yield call(news.get, '/top-headlines');
    yield put(fetchResourcesArticlesSuccess(response.data.articles))
  } catch(error){
    console.log(error);
  }
}

export function* watchfetchResourcesArticlesSaga() {
  yield takeEvery(FETCH_RESOURCES_ARTICLES, fetchResourcesArticlesSaga);
}


//Experts:
export function* fetchExpertsPersonnelsSaga() {
  try {
    const response = yield call(connect.get, '/experts');
    yield put(fetchExpertsPersonnelsSuccess(response.data))
  } catch(error){
    console.log(error);
  }
}

export function* watchfetchExpertsPersonnelsSaga() {
  yield takeEvery(FETCH_EXPERTS_PERSONNELS, fetchExpertsPersonnelsSaga);
}



//   notice how we now only export the rootSaga
// single entry point to start all Sagas at once.
export default function* rootSaga() {
    yield all([
      watchfetchPilotsProjectsSaga(),
      watchfetchTopicsQuestionsSaga(),
      watchfetchTopicsAnswersSaga(),
      watchfetchResourcesArticlesSaga(),
      watchfetchExpertsPersonnelsSaga()
      
    ])
  };



// // Making Watcher for all the sagas.
//   export let sagas = [
//     ...dataSagas
// ].map(createWatcher);

// // For each action/saga pair, the action should trigger the saga each time
// function createWatcher (actionSagaPair) {
//     return function* () {
//         yield* takeEvery(...actionSagaPair);
//     };
// }