import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ToDoReducer from "./reducers/ToDoReducers";
import ToDoAction from "./actions/ToDoActions";

const reducer = combineReducers({
  Todo: ToDoReducer,
});

const initialstate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
