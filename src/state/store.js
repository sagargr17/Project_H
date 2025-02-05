import { thunk } from "redux-thunk";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { AuthReducer } from "./Auth/Reducer";
import residentReducer from "./Resident/Reducer";
import signInReducer from "./UserProfile/Reducer";
const rootReducer=combineReducers({
    auth:AuthReducer,
    resident:residentReducer,
    sign:signInReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

