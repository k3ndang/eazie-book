const photos = (state = [], action) => {
    switch(action.type){
        case 'SET_ITEM_PHOTOS' :
            return action.payload;
        default :
            return state;
    }
}

export default photos;