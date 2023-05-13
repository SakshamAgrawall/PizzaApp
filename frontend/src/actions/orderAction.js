import axios from "axios"

export const placeOrder = (subTotal) => async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        await axios.post("/api/orders/ordernow",{subTotal,currentUser,cartItems});
        dispatch({type:"PLACE_ORDER_SUCCESS"});
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAIL"});
        console.log(error);
    }
};

export const getUserOrders = ()=>async(dispatch,getState)=>{
const currentUser = getState().loginUserReducer.currentUser
dispatch({
    type:"USER_ORDER_REQUEST"
})
try {
    const response = await axios.post('/api/orders/getorders',{userid:currentUser._id})
    console.log(response.data)
    dispatch({type:"USER_ORDER_SUCCESS",payload:response.data})
} catch (error) {
    dispatch({type:"USER_ORDER_ERROR",payload:error})
}
}