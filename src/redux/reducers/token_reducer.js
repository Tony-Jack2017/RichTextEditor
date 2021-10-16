const initTokenState = ''
 const tokenReducer = (state = initTokenState, action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return action.token
        case 'REMOVE_TOKEN':
            return initTokenState
        default:
            return state
    }
}
export default tokenReducer