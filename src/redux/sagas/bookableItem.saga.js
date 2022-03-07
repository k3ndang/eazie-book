import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* bookableItemSaga() {
    yield takeEvery('FETCH_BOOKABLE_ITEM', fetchBookableItem)
    yield takeEvery('POST_BOOKABLE_ITEM', postBookableItem)
}

function* fetchBookableItem() {
    const res = yield axios.get(`/api/bookableItem`)
    yield put({type: 'SET_BOOKABLE_ITEM_LIST', payload: res})

}

function* postBookableItem(action) {
    const res = yield axios.post(`/api/bookableItem`, action.payload)
    console.log('action.payload', action.payload);
    
    yield put({type: 'FETCH_BOOKABLE_ITEM'})
}

export default bookableItemSaga;