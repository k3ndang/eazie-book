import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* editActiveClient(action){
    try{
        axios.get(`clients/${action.payload.id}`);

        yield put({
            type: 'SELECTED_CLIENT'
        })
    }
    catch(error) {
        console.error('ERROR in getting active client', err);
    }
}


function* editClient(){
    takeEvery('GET_ACTIVE_CLIENT', editActiveClient);
}

export default editClient;