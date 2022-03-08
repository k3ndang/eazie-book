import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateClient(action){
    console.log('in updateClient.saga', action.payload.id);
    try{

        yield axios.put(`/client/${action.payload.id}`, action.payload);

        yield put({
            type: "FETCH_CLIENTS"
        })
    }
    catch(error) {
        console.error('ERROR in updateClient.saga', error);
    }
    
}

function* updateClientSaga(){
    yield takeEvery('UPDATE_CLIENT', updateClient);
}

export default updateClientSaga;