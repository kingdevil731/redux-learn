// Reducer = Logic Part of Redux
const IsLogged = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return state = true;
        case 'LOGOUT':
            return state = false;
        default: 
            return state;
    }
};

export default IsLogged;