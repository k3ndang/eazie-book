const singleItemPhoto = (state =[], action) => {
    switch(action.type){
        case 'SET_SINGLE_ITEM_PHOTO' :
            return action.payload;
        default :
            return state;
    }
} 

export default singleItemPhoto;