import { combineReducers } from "redux";
//import all the rducers
import amountReducer from "./amountReducer";

const reducers=combineReducers({
    amount: amountReducer
})

export default reducers