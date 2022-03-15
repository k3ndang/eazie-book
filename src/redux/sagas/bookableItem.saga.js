import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* bookableItemSaga() {
   
    yield takeEvery('FETCH_BOOKABLE_ITEM', fetchBookableItem);

    //triggered in addBookableItem Form on pressing submit button:
    yield takeEvery('POST_BOOKABLE_ITEM', postBookableItem);
    
    yield takeEvery('POST_PHOTO', postPhoto)
    yield takeEvery('RENTER_FETCH_BOOKABLE_ITEM', renterFetchBookableItem)
    yield takeEvery('FETCH_SELECTED_BOOKABLE_ITEM', fetchSelectedBookableItem);
    yield takeEvery('SAVE_BOOKABLE_ITEM', saveEditBookableItem);
    //we need a fetch photo saga will be implemented later down the road
    yield takeEvery('FETCH_RENTER_HISTORY', fetchRenterHistory);
    yield takeEvery('FETCH_ITEM_PHOTOS', fetchItemPhotos);
    
}

function* clientBookableItem(action){
    try{
        const response = yield axios.get(`/api/bookableItem/${action.payload}`)

        yield put({
            type: 'SET_CLIENT_ITEM',
            payload: response.data
        })
    }
    catch(error) {
        console.error('ERROR getting items for client', error);
    }
}

function* fetchItemPhotos(action){
    try{
        const response = yield axios.get(`/api/photos/${action.payload}`);

        yield put({
            type: 'SET_ITEM_PHOTOS',
            payload: response.data,
        });
    }
    catch(error) {
        console.error('ERROR getting photos for item', error);
    }
}

function* renterFetchBookableItem (action) {
    try {
        const result = yield axios.get(`/api/bookableItem/renterReq/${action.payload}`)
        console.log('result from renter fetch', result.data)

        yield put({
            type: "SET_RENTER_FETCH_BOOKABLEITEM",
            payload: result.data
        })
    }
    catch {
        console.log('ERROR in GET renter fetchBookableItem')
    }
} 



function* fetchRenterHistory() {
    const result = yield axios.get(`api/renter`)
    console.log('result is', result);
    yield put({
        type: 'SET_RENTER_HISTORY', 
        payload: result.data
    })
}

function* fetchBookableItem() {
    try {
        const result = yield axios.get(`/api/bookableItem`)
        console.log('data got back from server', result.data)
        yield put({
            type: 'SET_BOOKABLE_ITEM_LIST', 
            payload: result.data
        })
    }
    catch {
        console.log('ERROR in GET bookableItem')
    }
}; //end of fetchBookableItem


function* postPhoto(action) {
    try{
        const config = {
            headers: {"Contents-Type": "application/json"},
            withCredentials: true,
        };
        
        yield axios.post(`/api/photos/:id`, action.payload, config);
    }
    catch (error) {
        console.error('ADD photo failed', error);
    }
}


function* fetchSelectedBookableItem (action) {
    try {
        const result = yield axios.get(`/api/bookableItem/selected/${action.payload}`)

        yield put({
            type: 'SET_SELECTED_BOOKABLE_ITEM',
            payload: result.data
        })
    }
    catch {
        console.log('ERROR in GET selected bookableItemId')
    }
}; // end of fetchSelectedBookableItem

function* saveEditBookableItem (action) {
    console.log('updated bookableItemId', action.payload);
    
    try{
        yield axios.put(`/api/bookableItem`, action.payload);

        yield put({
            type: 'FETCH_BOOKABLE_ITEM',
        });
    } 
    catch (err) {
        console.log('FAILED update selected bookableItem', err);
    }
}; // end saveEditBookableItem


//called in the add bookable item component 
//admin 
function* postBookableItem(action) {
    console.log('post bookableItem saga clientId', action.payload.clientId);

    try {
        yield axios.post(`/api/bookableItem`, action.payload);
        yield put({
            type: 'FETCH_BOOKABLE_ITEM'
        })
    }
    catch {
        console.log('ERROR in POST BookableItem saga')
    } 
}; // end of postBookableItem



export default bookableItemSaga;