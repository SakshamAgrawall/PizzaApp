import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {getAllPizzaReducer} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { signUpUserReducer } from "./reducers/userReducer";



const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [];


const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    signUpUserReducer:signUpUserReducer
});


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