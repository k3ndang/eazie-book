const clientSelectedItem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CLIENT_SELECTED_ITEM':
            return action.payload;
        case 'UPDATE_CLIENT_SELECTED_ITEM':
            return{
                ...state,
                ...action.payload,
            };
    }
    return state;
};

export default clientSelectedItem;