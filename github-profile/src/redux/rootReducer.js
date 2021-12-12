import {combineReducers} from "redux";

import profileReducer from "./reducers/Profile/profile";
import repoReducer from "./reducers/Repository/repos";

export default combineReducers({
    profileReducer, repoReducer
});
