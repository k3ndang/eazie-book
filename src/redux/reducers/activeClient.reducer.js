const activeClient = (state=[], action) => {
    switch(action.type){
        case 'SELECTED_CLIENT' :
            return action.payload;
        default :
            return state;
    }
}

export default activeClient;