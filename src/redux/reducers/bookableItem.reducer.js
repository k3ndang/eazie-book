import { combineReducers } from 'redux';
const bookableItemReducer = (state = [], action) => {
    switch(action.type) {
        case ('SET_BOOKABLE_ITEM_LIST'):
            return action.payload.data
    }
    return state
}

const titleReducer = (state = '', action) => {
    switch(action.type) {
        case ('SET_TITLE'):
            return action.payload
    }
    return state
}

const summaryReducer = (state = '', action) => {
    switch (action.type) {
        case ('SET_SUMMARY'):
            return action.payload
    }
    return state
}

const detailReducer = (state = '', action) => {
    switch (action.type) {
        case ('SET_DETAIL'):
            return action.payload
    }
    return state
}

const rateReducer = (state = 0, action) => {
    switch (action.type) {
        case ('SET_RATE'):
            return action.payload
    }
    return state
}

const unitTimeReducer = (state = 0, action) => {
    switch (action.type) {
        case ('SET_UNIT_TIME'):
            return action.payload
    }
    return state
}

const locationReducer = (state = '', action) => {
    switch (action.type) {
        case ('SET_LOCATION'):
            return action.payload
    }
    return state
}

const categoryIdReducer = (state = 1, action) => {
    switch (action.type) {
        case ('SET_CATEGORY_ID'):
            return action.payload
    }
    return state
}

const clientIdReducer = (state = 1, action) => {
    switch (action.type) {
        case ('SET_CLIENT_ID'):
            return action.payload
    }
    return state
}

const bookableItem = combineReducers({
    bookableItemReducer,
    titleReducer,
    summaryReducer,
    detailReducer,
    rateReducer,
    unitTimeReducer,
    locationReducer, 
    categoryIdReducer, 
    clientIdReducer
})

export default bookableItem