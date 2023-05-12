import React,{useEffect} from 'react';
import {Row,Col} from "react-bootstrap"
import {getUserOrders} from '../actions/orderAction'
import {useDispatch,useSelector} from "react-redux"

const Orders = () => {
  const orderState = useSelector(state=>state.getOrderReducer);
  const dispatch = useDispatch();
  const {orders}=orderState
  useEffect(()=>{
    dispatch(getUserOrders())
  },[dispatch])
  return (
    <>
    <h1>Your Orders</h1>
    {
      orders && orders.map((order)=>(
        <Row>
          <Col md={4}>
            {order.orderItems.map((item) =>(
              <div className='container'>
              <h5>{item.name}[{item.varient}] * {item.price}</h5>
              </div>
            ))}
          </Col>
          <Col md={4}></Col>
        </Row>
      ))
    }
    <hr/>
    </>
  )
}

export default Orders