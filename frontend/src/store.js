import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {getAllPizzaReducer} from "./reducers/pizzaReducer";


const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer
})
const initialState={}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;