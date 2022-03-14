import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* bookingItem() {
    yield takeEvery("BOOKING_CONFIRM", renterConfirm);
}

function* renterConfirm(action) {
    try{
        yield axios.post('/api/renter', action.payload)

        // yield put({
        //     type: ""
        // })
    }
    catch (err) {
        console.error('renter booking item failed', err)
    }
}

export default bookingItem;