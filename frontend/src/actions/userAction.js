import axios from "axios";

export const signUpUser = (user) => async dispatch =>{
    dispatch({type:"USER_SIGNUP_REQUEST"})
    try {
        const res = await axios.post("/api/users/signup",user);
        console.log(res)
        dispatch({type:"USER_SIGNUP_SUCCESS"})
    } catch (error) {
        dispatch({type:"USER_SIGNUP_ERROR",payload:error})
    }
};

export const loginUser=(user)=> async dispatch=>{
   dispatch({type:"USER_LOGIN_REQUEST"})
   try {
    const response = await axios.post("/api/users/login",user);
    dispatch({type:"USER_LOGIN_SUCCESS",payload:response.data})
    localStorage.setItem("currentUser",JSON.stringify(response.data))
    window.location.href='/'
   } catch (error) {
      dispatch({type:"USER_LOGIN_ERROR",payload:error})
   }
}

export const logoutUser = () =>dispatch=> {
   localStorage.removeItem("currentUser")
   window.location.href ="/login";
}