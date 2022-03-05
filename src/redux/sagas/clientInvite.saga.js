import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setClientInvite(action) {
    try{
        console.log('in setClientInvite');
        /* checking what the payload is */
        console.log('action.payload in clientInviteSaga is', action.payload);
        /* sending the payload to clientInvite.router */
        yield axios.post('/admin/invite', action.payload);
        /* sending the response of the router to inviteClient.reducer */
        yield put({type: 'SET_CLIENT_INVITE', payload: action.payload})
    }
    catch (error) {
        console.error('ERROR in posting client invite data');
    }
}


function* clientInviteSaga() {
    yield takeLatest('INVITE_CLIENT', setClientInvite);
}

export default clientInviteSaga;