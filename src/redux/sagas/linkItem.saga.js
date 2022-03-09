import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* linkItem(action){
    try{
        yield axios.put(`/categoryInput/${action.payload.itemId}`, action.payload);
    }
    catch(error){
        console.error('ERROR in posting action.payload to the router in linkItem.saga', error);
    }
}

function* linkItemSaga(){
    yield takeEvery('LINK_ITEM', linkItem)
}

export default linkItemSaga;