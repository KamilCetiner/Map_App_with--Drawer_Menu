export function reducer (state, action) {
    switch (action.type) {
        case 'SIGN_USER':
            state.user = action.payload.SignUser
            return {...state}
        
        default:
            return state;
    }
     
       
}