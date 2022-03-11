import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchCompany(action){
    try{
        const response = yield axios.get('/companyNames')

        yield put({
            type: 'SET_COMPANY_NAME',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting company names', error);
    }
}

function* fetchCompanyName(){
    yield takeEvery('FETCH_COMPANY_NAME', fetchCompany);
}

export default fetchCompanyName;