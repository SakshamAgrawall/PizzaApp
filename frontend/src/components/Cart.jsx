import React from 'react'
import {Col, Container, Row } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {AiFillPlusSquare,AiFillMinusSquare,AiFillDelete} from "react-icons/ai";
import { addTOCart, deleteFromCart } from "../actions/cartAction";
import OrderNow from './orderNow';

const Cart = () => {
    const cartState = useSelector(state=>state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x,item)=>x+item.price,0)
  return (
    <>
    <Container>
        <Row>
            <Col md={6}>
                <h1>MyCart</h1>
                <Row>
                    {
                        cartItems.map(item=>(
                            <>
                            <Col md={7}>
                            <h5>{item.name} [{item.varient}]</h5>
                             <h6>price: {item.quantity} X {item.prices[0][item.varient]} = {" "} {item.price}</h6><br/>
                             <h6> Quantity:&nbsp;
                             <AiFillMinusSquare onClick={()=>{dispatch(addTOCart(item,item.quantity-1,item.varient));}} style={{cursor:"pointer"}} className='text-danger'/>&nbsp;
                                 {item.quantity}&nbsp;
                                 <AiFillPlusSquare onClick={()=>{dispatch(addTOCart(item,item.quantity+1,item.varient));}} style={{cursor:"pointer"}} className='text-danger'/>&nbsp;
                                 
                                 </h6>
                             <hr/>
                            </Col>
                            <Col md={5}>
                             <img alt={item.name} src={item.image} style={{width:"100px",height:"90px"}}/>
                             <AiFillDelete onClick={()=>{dispatch(deleteFromCart(item));}} style={{cursor:"pointer",marginLeft:"10px"}}/></Col>
                            </>
                        ))
                    }
                </Row>
            </Col>
            <Col md={4}>
                <h1>Payment Info</h1>
                <h4>Sub Total</h4>
                <h4>RS: {subTotal} /-</h4>
               <OrderNow subTotal={subTotal}/>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Cart;