export const signUpUserReducer =(state={},action)=>{
     switch (action.type) {
        case "USER_SIGNUP_REQUEST":
             return{
                loading:true
             }
        case "USER_SIGNUP_SUCCESS":
             return{
                loading:false, success: true
             }
        case "USER_SIGNUP_ERROR":
             return{
                loading:false, error:action.payload
             }
        default:
            return{state};
     }
}

export const loginUserReducer =(state={},action)=>{
     switch (action.type) {
        case "USER_LOGIN_REQUEST":
             return{
                loading:true
             }
        case "USER_LOGIN_SUCCESS":
             return{
                loading:false, success: true , currentUser:action.payload
             }
        case "USER_LOGIN_ERROR":
             return{
                loading:false, error:action.payload
             }
        default:
            return state;
     }
}