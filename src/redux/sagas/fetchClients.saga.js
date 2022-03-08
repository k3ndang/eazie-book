import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getClients(action) {
    try{
        const response = yield axios.get('/clients')

        yield put({
            type: 'SET_CLIENTS',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting data in fetchClients', error);
    }
}

function* getItemNames() {
    try{
        const response = yield axios.get('/api/bookableItemNames')

        yield put({
            type: 'SET_ITEM_LIST',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting data in fetchClients', error);
    }
}

function* fetchClients(){
    yield takeEvery('FETCH_CLIENTS', getClients);
    yield takeEvery('FETCH_ITEM_LIST', getItemNames)

}

export default fetchClients;