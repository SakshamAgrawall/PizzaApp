import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {getAllPizzaReducer} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState={
    cartReducer : {
        cartItems : cartItems
    }
};
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;