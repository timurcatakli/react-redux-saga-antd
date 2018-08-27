import { takeEvery } from 'redux-saga/effects';

function* workerSaga() {
  console.log('Hello from worker saga');
}

// watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga);
}

export default rootSaga;
