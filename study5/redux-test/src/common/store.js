import { combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "../friend/state";
import mergeReducers from "../timeline/state";

const reducer3 = combineReducers({
  timeline: mergeReducers,
  friend: reducer,
});

const store = createStore(reducer3);
export default store;
