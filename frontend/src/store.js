import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {getAllPizzaReducer} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { signUpUserReducer , loginUserReducer } from "./reducers/userReducer";
import {placeOrderReducer,getUserOrdersReducer} from "./reducers/orderReducer";



const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem("currentUser")) : null;


const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    signUpUserReducer:signUpUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer
});


const initialState={
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
};
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;