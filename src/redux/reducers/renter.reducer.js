import { combineReducers } from 'redux';

const renterHistory = (state = [], action) => {
    switch (action.type) {
        case 'SET_RENTER_HISTORY':
            return action.payload;
    }
    return state;
}

const renterInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_RENTER_INFO':
            return action.payload;
    }
    return state;
}

export default combineReducers({
    renterHistory, 
    renterInfo, 
});