import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* bookableItemSaga() {
    // yield takeEvery('FETCH_BOOKABLE_ITEM', fetchBookableItem);
    yield takeEvery('POST_BOOKABLE_ITEM', postBookableItem);
}

// function* fetchBookableItem() {
//     const res = yield axios.get(`/api/bookableItem`)
//     yield put({type: 'SET_BOOKABLE_ITEM_LIST', payload: res})

// }

function* postBookableItem(action) {
    console.log('post bookableItem saga', action.payload);
    try {
        yield axios.post(`/api/bookableItem`, action.payload);
    
        // yield put({type: 'FETCH_BOOKABLE_ITEM'})
    }
    catch {
        console.log('ERROR in POST BookableItem saga')
    } 
}; // end of postBookableItem

export default bookableItemSaga;