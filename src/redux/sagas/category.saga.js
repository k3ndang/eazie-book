import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getCategories(action) {
    try{
        const response = yield axios.get('/api/categoryList')

        yield put({
            type: 'SET_CATEGORY_LIST',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting data in fetchClients', error);
    }
}

function* categorySaga(){
    yield takeEvery('FETCH_CATEGORIES', getCategories);

}

export default categorySaga;