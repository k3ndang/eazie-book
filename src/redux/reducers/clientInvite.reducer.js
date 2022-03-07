const clientInvite = (state = [], action) => {
    switch(action.type) {
        case 'SET_CLIENT_INVITE' :
            return action.payload;
        default:
            return state;
    }
}

export default clientInvite;