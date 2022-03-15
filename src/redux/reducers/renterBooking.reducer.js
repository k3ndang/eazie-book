const renterBooking = (state = [], action) => {
    switch (action.type) {
        case 'REVIEWING_BOOKING':
            return action.payload;
        case 'UPDATE_BOOKABLE_ITEM':
            return{
                ...state,
                ...action.payload,
            };
        case "SET_BOOKING_CONFIRMATION":
            return action.payload
    }
    return state;
};

export default renterBooking;