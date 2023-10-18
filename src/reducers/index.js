import { combineReducers } from "redux";
import todolsits from "./todolists";
// here we will be combining all the reducers and then we will be sending it to store file

export default combineReducers({ todolsits });
