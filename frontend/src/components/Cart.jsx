import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {AiFillPlusSquare,AiFillMinusSquare} from "react-icons/ai";

const Cart = () => {
    const cartState = useSelector(state=>state.cartReducer);
    const cartItems = cartState.cartItems;
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
                             <h7>price: {item.quantity} X {item.prices[0][item.varient]} = {" "} {item.price}</h7><br/>
                             <h7> Quantity:&nbsp;
                                <AiFillPlusSquare className='text-danger'/>&nbsp;
                                 {item.quantity}&nbsp;
                                 <AiFillMinusSquare className='text-danger'/>
                                 </h7>
                             <hr/>
                            </Col>
                            <Col md={5}>
                             <img alt={item.name} src={item.image} style={{width:"100px",height:"90px"}}/>
                            </Col>
                            </>
                        ))
                    }
                </Row>
            </Col>
            <Col md={4}>
                <h1>Payment Info</h1>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Cart;