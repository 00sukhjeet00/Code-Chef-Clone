import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Action/type"

export const userReducer=(state={},action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return {isLoading:action.isLoading}
        case LOGIN_SUCCESS:
            return {isLoading:action.isLoading,msg:action.msg}
        case LOGIN_FAILED:
            return {isLoading:action.isLoading,msg:action.msg}
        default:
            return state
    }
}