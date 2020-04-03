import { combineReducers } from "redux";
import actionTypes from "./tasksActionTypes";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      console.log('payload', payload)
      return [...state, payload];

    case actionTypes.DELETE:
        return [...state.filter(contact => contact.id !== payload)]

    default:
        return state;
  }
};

const filter = (state = "", {type, payload}) => {
    switch (type) {
        case actionTypes.FILTER:
            return payload

        default:
            return state;
    }
};
const inUp = (state = false, action) => state;
const alert = (state = false, action) => state;

export default combineReducers({
  contacts,
  filter,
  inUp,
  alert
});
