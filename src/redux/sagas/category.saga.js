import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchCategories(action) {
    try{
        const response = yield axios.get('/categoryList')

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
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);

}

export default categorySaga;