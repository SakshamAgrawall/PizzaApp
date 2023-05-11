import axios from "axios";

export const signUpUser = (user) => async dispatch =>{
    dispatch({type:"USER_SIGNUP_REQUEST"})
    try {
        const res = await axios.post("/api/users/signup",user);
        dispatch({type:"USER_SIGNUP_SUCCESS"})
    } catch (error) {
        dispatch({type:"USER_SIGNUP_ERROR",payload:error})
    }
}