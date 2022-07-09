import { combineReducers } from "redux";
//import all the rducers
import amountReducer from "./amountReducer";

export default reducers=combineReducers({
    amount: amountReducer
})