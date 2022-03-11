import { combineReducers } from 'redux';


const bookableItemReducer = (state = [], action) => {
    switch(action.type) {
        case ('SET_BOOKABLE_ITEM_LIST'):
            return action.payload
        case ('SET_RENTER_FETCH_BOOKABLEITEM'):
            return action.payload
    }
    return state
}

const bookableItem = combineReducers({
    bookableItemReducer,
})

export default bookableItem;