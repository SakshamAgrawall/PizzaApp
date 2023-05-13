import React, { useEffect } from "react";
// import pizzas from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "./Pizza.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return(
  <>
    <Container>
      {
      loading ? ( <h1>Loading...</h1>) 
                : error ? (<h1>error</h1>) 
                :(
        <Row>
          {pizzas.map((pizza) => (
            <Col md={4} key={pizza._id}>
              <Pizza pizza={pizza} key={pizza.name} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  </>
  );
};

export default HomePage;
