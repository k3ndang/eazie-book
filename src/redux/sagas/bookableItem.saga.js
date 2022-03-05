import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* bookableItemSaga() {
    yield takeEvery('FETCH_BOOKABLE_ITEM', fetchBookableItem)
}

function* fetchBookableItem() {
    const res = yield axios.get(`/api/bookableItem`)
    yield put({type: 'SET_BOOKABLE_ITEM_LIST', payload: res})

}

export default bookableItemSaga;