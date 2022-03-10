import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
//Saga that contains the FETCH_CLIENT_LIST grabs all bookable items according to client ID 
function* fetchItemNames(action){
    try{
        const response = yield axios.get('/bookableItemNames')

        yield put({
            type: 'SET_ITEM_LIST',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting bookable items', error);
    }
}
//FETCH_CLIENT_LIST function 
function* fetchClientList(){
    try{
        const response = yield axios.get('/api/client/bookableItem')
       
        // data from get request will be put into the clientList reducer
        yield put({
            type: 'SET_CLIENT_LIST',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting bookable items', error);
    }
}

function* fetchBookableItems(){
    yield takeEvery('FETCH_ITEM_LIST', fetchItemNames)
   
    //triggered on page load in ClientBookableItems 
    yield takeEvery('FETCH_CLIENT_LIST', fetchClientList)
}

export default fetchBookableItems;