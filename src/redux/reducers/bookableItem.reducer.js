const bookableItemReducer = (state = [], action) => {
    switch(action.type) {
        case ('SET_BOOKABLE_ITEM_LIST'):
            return action.payload.data
    }
    return state
}

export default bookableItemReducer;