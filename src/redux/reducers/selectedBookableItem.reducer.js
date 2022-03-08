const selectedBookableItem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_BOOKABLE_ITEM':
            return action.payload;
        case 'UPDATE_BOOKABLE_ITEM':
            return{
                ...state,
                ...action.payload,
            };
    }
    return state;
};

export default selectedBookableItem;