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
// function that runs when FETCH_CLIENT_LIST is called 
function* fetchClientList(){
    try{
        const response = yield axios.get('/api/client/bookableItem')
       
        // list of bookable items by client ID is stored in the clientList reducer
        yield put({
            type: 'SET_CLIENT_LIST',
            payload: response.data
        })
    }
    catch(error){
        console.error('ERROR getting client bookable items in fetchBookableItems saga', error);
    }
} // end fetchClientList


//Selected item is retrieved from clientDetailItem router 
// based on client clicking on image div in clientBookableItems 
function* fetchClientSelectedItem(action){
    try {
        console.log('this is hte action .. expect to see a payload with a number', action);
        yield axios.get(`/api/client/bookableItem/${action.payload}`);
        yield put({
            type: 'SET_CLIENT_SELECTED_ITEM',
            payload: response.data
        })
    }
    catch {
        console.log('ERROR in retrieving Client Detail data in fetchBookableItem saga')
    } 
} // end fetchClientSelectedItem

function* fetchBookableItems(){
    yield takeEvery('FETCH_ITEM_LIST', fetchItemNames)
   
    //triggered on page load in ClientBookableItems 
    yield takeEvery('FETCH_CLIENT_LIST', fetchClientList)

    //fetch the client's data for the selected item for detail page
    yield takeEvery('FETCH_CLIENT_SELECTED_ITEM', fetchClientSelectedItem)
}

export default fetchBookableItems;