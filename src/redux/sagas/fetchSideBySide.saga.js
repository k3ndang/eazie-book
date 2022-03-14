import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchSideBySide(action){
    try{
        const response = yield axios.get('/sidebyside/:id')

        yield put({
            type: 'SET_SIDEBYSIDE',
            payload: response.data
        }) 
    }
    catch(error){
        console.error('ERROR getting data in fetchSideBySide', error);
    }
}

function* fetchSideBySideSaga(){
    yield takeEvery('FETCH_SIDEBYSIDE', fetchSideBySide);
}

export default fetchSideBySideSaga;