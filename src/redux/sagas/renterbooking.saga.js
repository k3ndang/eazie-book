import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* bookingItem() {
    yield takeEvery("BOOKING_CONFIRM", renterConfirm);
    yield takeEvery("FETCH_BOOKING_CONFIRM", renterFetchBookingConfirm);
}

function* renterConfirm(action) {
    try{
        yield axios.post('/api/renter', action.payload)
    }
    catch (err) {
        console.error('renter booking item failed', err)
    }
}

function* renterFetchBookingConfirm (action) {
    try{
        const result = yield axios.get(`/api/renter/confirm/${action.payload}`)

        yield put({
            type: "SET_BOOKING_CONFIRMATION",
            payload: result.data
        })

    }
    catch (err) {
        console.error('renter fetching booking failed', err)
    }
}


export default bookingItem;