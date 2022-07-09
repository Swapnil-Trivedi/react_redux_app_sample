import { combineReducers } from "redux";
//import all the rducers
import amountReducer from "./amountReducer";

const reducers=combineReducers({
    //this is the state we will use later
    amount: amountReducer
})

export default reducers