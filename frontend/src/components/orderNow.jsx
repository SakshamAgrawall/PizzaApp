import React from 'react';
import {Button} from "react-bootstrap";
import { useDispatch} from 'react-redux';
import {placeOrder} from "../actions/orderAction";

const OrderNow = ({subTotal}) => { 
  const dispatch = useDispatch();
    
    const orderHandler = ()=>{
        dispatch(placeOrder(subTotal));
        alert("order placed successfull");
    }
  return (
    <Button onClick={orderHandler}>Order Now</Button>
  )
}

export default OrderNow;