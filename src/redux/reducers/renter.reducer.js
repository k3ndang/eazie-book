const renterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RENTER_HISTORY':
            return action.payload;
    }
    return state;
}

export default renterReducer;