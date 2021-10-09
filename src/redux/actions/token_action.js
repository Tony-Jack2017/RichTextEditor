// add token for verify user login yet

import {ADDTOKEN, REMOVETOKEN} from '../constant'

const createTokenAction = (actionName, token) => {
    switch (actionName) {
        case ADDTOKEN:
            // sync
            return {
                type: ADDTOKEN,
                token: token
            }
        // async
        // return (dispatch) => {
        //     request
        //     fetch('request url').then(resp => {
        //         dispatch({
        //             type: ADDTOKEN,
        //             token: resp.data.token
        //         })
        //     })
        // }

        case REMOVETOKEN:
            return {
                type: REMOVETOKEN
            }
        default:
            return {
                type: 'UNKOWN'
            }
    }
}
export default createTokenAction