import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* clientSaga() {
    yield takeEvery('DELETE_SELECTED_CLIENT', deleteClient);
    yield takeEvery('GET_ACTIVE_CLIENT', editActiveClient);
    yield takeEvery('FETCH_CLIENTS', getClients);
    yield takeLatest('INVITE_CLIENT', setClientInvite);
    yield takeEvery('UPDATE_CLIENT', updateClient);
}

function* updateClient(action) {
    console.log('in updateClient.saga', action.payload.id);
    try {
        yield axios.put(`/clients/${action.payload.id}`, action.payload);

        yield put({
            type: "FETCH_CLIENTS"
        })
    }
    catch (error) {
        console.error('ERROR in updateClient.saga', error);
    }

}

function* getClients(action) {
    try {
        const response = yield axios.get('/clients')

        yield put({
            type: 'SET_CLIENTS',
            payload: response.data
        })
    }
    catch (error) {
        console.error('ERROR getting data in fetchClients', error);
    }
}

function* setClientInvite(action) {
    try {
        console.log('in setClientInvite');
        /* checking what the payload is */
        console.log('action.payload in clientInviteSaga is', action.payload);
        /* sending the payload to clientInvite.router */
        yield axios.post('/admin/invite', action.payload);
        /* sending the response of the router to inviteClient.reducer */
        yield put({ type: 'SET_CLIENT_INVITE', payload: action.payload })
    }
    catch (error) {
        console.error('ERROR in posting client invite data');
    }
}

function* deleteClient(action) {
    try {
        console.log('made it to deleteClient');

        console.log('action.payload in deleteClient is', action.payload);

        yield axios.delete(`/clients/${action.payload.id}`);

        yield put({
            type: 'FETCH_DATA'
        })
    }
    catch (err) {
        console.error('DELETE client failed', err);
    }
}

function* editActiveClient(action) {
    try {
        axios.get(`clients/${action.payload.id}`);

        yield put({
            type: 'SELECTED_CLIENT'
        })
    }
    catch (error) {
        console.error('ERROR in getting active client', err);
    }
}

export default clientSaga