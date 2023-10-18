import {
  ADD_NEW_TODO,
  DELETE_SINGLE_TODO,
  ENABLE_EDIT_TODO,
  UPDATE_TODO,
} from "../actions/actionTypes";

export default function todolists(state = [], action) {
  switch (action.type) {
    case UPDATE_TODO:
      console.log("action.todolists", action.todolists);
      return action.todolists;
    case ENABLE_EDIT_TODO:
      console.log("action12121", action);
      console.log("state11", state);
      let newState = state.map(function (ci, ind, array) {
        if (ci.id === action.todoitemId) {
          ci.showEdit = action.showEditbtn;
        }
        return ci;
      });
      return newState;
    case DELETE_SINGLE_TODO:
      console.log("delete is called");
      let updatedState = state.filter(function (ci, ind, array) {
        if (ci.id !== action.todoItem) {
          return ci;
        }
      });
      return updatedState;
    case ADD_NEW_TODO:
      console.log("ADD_NEW_TODO", [...state, action.todoItem]);
      return [...state, action.todoItem];

    default:
      return state;
  }
}
