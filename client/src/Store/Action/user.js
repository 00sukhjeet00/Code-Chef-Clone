import { endPoint } from "../../Utils/apiCall"
import { apiCall } from "../../Utils/httpClient"
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./type"

export const _login=(params)=>async(dispatch)=>{
        dispatch({type:LOGIN_REQUEST,isLoading:true})
        const res=await apiCall("POST",endPoint.login,params)
        if(res.status===200)
        {
            localStorage.setItem("token",res.data.token)
            dispatch({type:LOGIN_FAILED,isLoading:false})
        }else{
            dispatch({type:LOGIN_FAILED,msg:res.data.msg,isLoading:false})
        }
}