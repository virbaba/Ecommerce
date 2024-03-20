import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import ReviewReducer from "./Customers/Review/Reducer";

// Combine reducers
const rootReducers = combineReducers({
    auth: authReducer,
    customersProduct: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
    review: ReviewReducer,

    // admin
    adminsProduct: productReducer,
    adminsOrder: adminOrderReducer,
});

// Use createStore instead of legacy_createStore
export const store = createStore(rootReducers, applyMiddleware(thunk)); 
