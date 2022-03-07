import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteClient(action) {
    try{
        console.log('made it to deleteClient');
        
        console.log('action.payload in deleteClient is', action.payload);
        
        yield axios.delete(`/clients/${action.payload.id}`);

        yield put({
            type: 'FETCH_DATA'
        })
    }
    catch(err) {
        console.error('DELETE client failed', err);
    }
}

function* deleteClientSaga(){
    yield takeEvery('DELETE_SELECTED_CLIENT', deleteClient);
}

export default deleteClientSaga;