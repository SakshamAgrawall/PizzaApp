import React from 'react';
import {Button} from "react-bootstrap";
import { useDispatch,useSelector} from 'react-redux';
import {placeOrder} from "../actions/orderAction";

const OrderNow = ({subTotal}) => { 
  const userState = useSelector((state)=>state.loginUserReducer)
  const dispatch = useDispatch();
  const {currentUser} = userState
    
    const orderHandler = ()=>{
        dispatch(placeOrder(subTotal));
        alert("order placed successfull");
      }
     
      const noLoginHandler =()=>{
        alert("You are not Login")
        window.location.href = "/login"
      }

  return (
    <Button onClick={currentUser?(orderHandler):(noLoginHandler)}>Order Now</Button>
  )
}

export default OrderNow;