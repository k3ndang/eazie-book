//information in this reducer is retrieved from the clientDetailItem router
const clientList = (state = [], action) => {
    switch(action.type) {
        case 'SET_CLIENT_LIST' :
            return action.payload;
        default :
            return state;
    }
}

export default clientList;