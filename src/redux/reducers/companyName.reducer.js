const companyName =(state =[], action) => {
    switch(action.type){
        case 'SET_COMPANY_NAME' :
            return action.payload;
        default:
            return state;
    }
}

export default companyName;