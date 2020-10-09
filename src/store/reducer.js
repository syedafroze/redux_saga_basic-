import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "../sagas/saga";
const sagaMiddleware = createSagaMiddleware();
const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP_ASYNC":
      newState.age += action.value;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
  }
  return newState;
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);

export default store;
