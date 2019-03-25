import { put, call, all, takeEvery } from 'redux-saga/effects';
import connect from '../apis/connect';
import { FETCH_PILOT_PROJECTS } from './types';
import { fetchPilotProjectsSuccess } from '.';

// Connect Sagas
// Pilots
export function* fetchPilotProjectsSaga() {
  try {
    const response = yield call(connect.get, '/pilots');
    yield put(fetchPilotProjectsSuccess(response.data));

  } catch(error){
    console.log(error);
  }  
}

export function* watchfetchPilotProjectsSaga(){
  yield takeEvery(FETCH_PILOT_PROJECTS, fetchPilotProjectsSaga);
}

//   notice how we now only export the rootSaga
// single entry point to start all Sagas at once.
export default function* rootSaga() {
    yield all([
      watchfetchPilotProjectsSaga()
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