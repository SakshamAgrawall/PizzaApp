import React, { useEffect } from "react";
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

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh", backgroundColor: "black", color: "white" }}
      >
        <div
          className="spinner-grow text-white"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
        <div className="mt-2">
          Please wait, we are Fatching Latest Pizzas for you 😋
        </div>
      </div>
    );
  }

  return (
    <>
      <Container>
        {error ? (
          <h1>error</h1>
        ) : (
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
