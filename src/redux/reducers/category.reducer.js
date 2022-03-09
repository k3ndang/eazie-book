const categoryList = (state = [], action) => {
    switch(action.type) {
        case 'SET_CATEGORY_LIST' :
            return action.payload;
        case 'UPDATE_CATEGORY_LIST':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    } 
}

export default categoryList;