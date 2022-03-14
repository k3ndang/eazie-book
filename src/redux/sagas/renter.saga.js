import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* renterSaga(){
    yield takeEvery('FETCH_RENTER_INFO', fetchRenterInfo)
}

function* fetchRenterInfo(){
    let response = yield axios.get(`api/renter/info`)
    yield put({
        type: 'SET_RENTER_INFO', 
        payload: response.data
    })
}

export default renterSaga;