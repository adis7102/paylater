
import authAction from './actions'

const initState = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') === 'true' : false,
    accessToken: localStorage.getItem('accessToken'),
    loadingLogin: false,
}


export default function rootReducer(state = initState, action) {

    switch (action.type) {
        case authAction.LOGIN:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: action.accessToken,
                loadingLogin: false
            }
        case authAction.LOGOUT:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: null
            }
        case authAction.LOADING_LOGIN:
            return {
                ...state,
                loadingLogin: action.payload
            }
        default:
            return state
    }
}