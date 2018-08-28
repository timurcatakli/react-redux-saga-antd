import {
  takeEvery, select, call, put,
} from 'redux-saga/effects';
import { fetchImages } from '../api';
import { IMAGES } from '../constants';
import { setImages, setError } from '../actions';

const getPage = state => state.page;

function* handleImagesLoadSaga() {
  try {
    // get page from the state using select effect
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()));
  }
}

// watcher saga
function* watchImagesLoadSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoadSaga);
}

export default watchImagesLoadSaga;
