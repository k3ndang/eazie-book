const renterBooking = (state = [], action) => {
    switch (action.type) {
        case 'BOOKING_CONFIRM':
            return action.payload;
        case 'UPDATE_BOOKABLE_ITEM':
            return{
                ...state,
                ...action.payload,
            };
    }
    return state;
};

export default renterBooking;