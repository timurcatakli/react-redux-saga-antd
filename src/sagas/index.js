import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImagesLoadSaga() {
  console.log('Hello from worker saga');
}

// watcher saga
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoadSaga);
}

export default rootSaga;
