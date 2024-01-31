import { getProductsReducers } from "./productsreducer";
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata:getProductsReducers
});

export default rootreducers;