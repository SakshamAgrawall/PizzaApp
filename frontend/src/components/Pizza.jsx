import React,{useState}from 'react'
import {Card,Button, Row, Col} from "react-bootstrap"

const Pizza = ({pizza}) => {
    const [quantity,setQuantity]=useState(1)
    const [varient,setVarient]=useState("small")
  return (
    <>
     <Card style={{ width: '18rem', margin:"1rem" }}>
      <Card.Img variant="top" src={pizza.image} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
         <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select value={varient} onChange={e=> setVarient(e.target.value)}>
                    {pizza.varients.map(varient=>(
                        <option  value={varient}>{varient}</option>
                    ))}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity}  onChange={e=> setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v,i)=>(
                        <option value={i+1} >{i+1}</option>
                    ))}
                </select>
            </Col>
         </Row>
        </Card.Text>
      <Row>
        <Col md={6}>Price: Rs.{pizza.prices[0][varient]* quantity}</Col>
        <Col md={6}><Button>Add To Cart</Button></Col>
      </Row>
      </Card.Body>
    </Card>
    </>
  )
}

export default Pizza;