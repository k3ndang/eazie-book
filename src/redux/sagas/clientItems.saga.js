import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* clientBookableItem(action){
    try{
        const response = yield axios.get(`/viewBookableItem/${action.payload}`)

        yield put({
            type: 'SET_CLIENT_ITEM',
            payload: response.data
        })
    }
    catch(error) {
        console.error('ERROR getting items for client', error);
    }
}


function* clientItems(){
    yield takeEvery('FETCH_CLIENT_BOOKABLE_ITEM', clientBookableItem);
}

export default clientItems;