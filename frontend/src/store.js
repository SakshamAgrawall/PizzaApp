import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {getAllPizzaReducer} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer
});

const initialState={
};
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;