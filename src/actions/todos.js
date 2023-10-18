import {
  ADD_NEW_TODO,
  DELETE_SINGLE_TODO,
  ENABLE_EDIT_TODO,
  UPDATE_SINGLE_TODO,
  UPDATE_TODO,
} from "./actionTypes";

export function fetchTodaList() {
  // creating thunk
  return function (dispatch) {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("todo list", data);
        let newData = data.map(function (ci, ind, arr) {
          console.log("cici", ci);
          ci.showEdit = false;
          return ci;
        });
        // console.log("newData", newData);
        dispatch(updateTodo(newData));
      });
  };
}

export function EnableTodaList(todoitemId, showEditbtn) {
  // creating thunk
  console.log("todoitem", todoitemId);
  return {
    type: ENABLE_EDIT_TODO,
    todoitemId,
    showEditbtn,
  };
}
export function updateTodoItem(tdoItem) {
  console.log("tdoItem", tdoItem.id);
  return function (dispatch) {
    const url = `https://jsonplaceholder.typicode.com/posts/${tdoItem.id}`;
    console.log("url", url);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id: tdoItem.Id,
        title: tdoItem.title,
        body: "",
        userId: tdoItem.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("123123123", data);
        dispatch(updateTodoItemTas(data));
        // let newData = data.map(function (ci, ind, arr) {
        //   console.log("cici", ci);
        //   ci.showEdit = false;
        //   return ci;
        // });
        // // console.log("newData", newData);
        // dispatch(updateTodoItem(data));
      });
  };
}

export function createTodoItem(tdoItem) {
  console.log("tdoItem", tdoItem);
  return function (dispatch) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: tdoItem.newTitle,
        body: tdoItem.newBody,
        userId: tdoItem.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("json", { ...data, completed: false });
        dispatch(AddNewTodo({ ...data, completed: false }));
      });
  };
}

export function deleteTodoItem(todoItemId) {
  return function (dispatch) {
    const url = `https://jsonplaceholder.typicode.com/posts/${todoItemId}`;
    console.log("url_delete", url);
    fetch(url, {
      method: "DELETE",
    });
    dispatch(deleteTodo(todoItemId));
  };
}

export function AddNewTodo(todoItem) {
  return {
    type: ADD_NEW_TODO,
    todoItem,
  };
}

export function updateTodo(todolsits) {
  return {
    type: UPDATE_TODO,
    todolists: todolsits,
  };
}

export function updateTodoItemTas(todoitem) {
  return {
    type: UPDATE_SINGLE_TODO,
    todoitem,
  };
}

export function deleteTodo(todoItem) {
  return {
    type: DELETE_SINGLE_TODO,
    todoItem,
  };
}
