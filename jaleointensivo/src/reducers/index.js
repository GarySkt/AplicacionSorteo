import { combineReducers } from "redux";
import { PremioReducer } from "./premio";

export const AppReducer = combineReducers({
    premio: PremioReducer
})