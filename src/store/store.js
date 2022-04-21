import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { parsistedData } from "../config/fakeDB.Config";
import { saveToLocalStorage } from "../config/fakeDB.Config";
// middlewares
import thunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducer,
  parsistedData,
  compose(
    applyMiddleware(thunkMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : function (f) {
          return f;
        }
  )
);

//saveing realtime updated state-data into localStorage from the store
const subscribe = store.subscribe(() => {
  const storeData = store.getState();
  saveToLocalStorage(storeData);
});
console.warn(subscribe);

export default store;
