import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchItemNames(action){
    try{
        const response = yield axios.get('/bookableItemNames')

        yield put({
            type: 'SET_ITEM_LIST',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting bookable items', error);
    }
}


function* fetchBookableItems(){
    yield takeEvery('FETCH_ITEM_LIST', fetchItemNames)
}

export default fetchBookableItems;