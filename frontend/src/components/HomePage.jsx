import React from 'react'
import pizzas from "../pizza-data";
import {Container,Row,Col} from "react-bootstrap";
import Pizza from "./Pizza.jsx"

const HomePage = () => {
  return (
    <>
    <Container>
        <Row>
            {pizzas.map(pizza=>(
            <Col md={4}>
                <Pizza pizza={pizza}/>
            </Col>
            ))}
        </Row>
    </Container>
   
    </>
  )
}

export default HomePage