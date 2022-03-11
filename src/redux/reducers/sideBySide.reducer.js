const sideBySide = (state = [], action) => {
    switch(action.type){
        case 'SET_SIDEBYSIDE' :
            return action.payload;
        default :
            return state;
    }
}

export default sideBySide;