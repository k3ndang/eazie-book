const selectedClientItem = (state = [], action) => {
    switch(action.type){
        case 'SET_CLIENT_ITEM' :
            return action.payload;
        default :
            return state;
    }
}

export default selectedClientItem;