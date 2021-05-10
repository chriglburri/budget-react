import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/entries.reducers";

const configureStore = () => {
    return createStore(
        combineReducers({
            entries: reducer,
        }),
        composeWithDevTools()
    );
};
export default configureStore;
