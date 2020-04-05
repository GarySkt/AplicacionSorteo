import { combineReducers } from "redux";
import { PremioReducer } from "./premio";
import { PuntoParticipacionReducer } from "./puntoParticipacion";

export const AppReducer = combineReducers({
    premio: PremioReducer,
    puntoParticipacion: PuntoParticipacionReducer
})