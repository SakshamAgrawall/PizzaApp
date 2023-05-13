import React,{useEffect} from 'react';
import {Row,Col} from "react-bootstrap"
import {getUserOrders} from '../actions/orderAction'
import {useDispatch,useSelector} from "react-redux"

const Orders = () => {
  const orderState = useSelector((state)=>state.getUserOrdersReducer);
  const {orders}=orderState;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserOrders());
  },[dispatch])
  return (
    <>
      <h1 className="text-center ">Your Orders </h1>
      {
        orders && orders.map(order=>(
          <div className='container border p-4 bg-light'>
          <Row>
            <Col md={4}>
            {order.orderItems.map(item=>(
                <h5>{item.name} [{item.varient}] X {item.quantity} = {item.price}</h5>
                ))
              }
            </Col>
            <Col md={4}>
              <h4>Order Info</h4>
              <h4>Order Amount : Rs. {order.orderAmount} </h4>
            </Col>
          </Row>
                </div>
        ))
      }
    </>
  );
};

export default Orders;