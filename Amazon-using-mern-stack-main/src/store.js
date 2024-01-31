import { createStore, applyMiddleware } from "redux";  // Fix the import statement
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";  // Fix the import statement
import rootReducer from "./Component/redux/reducers/main";

let middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
