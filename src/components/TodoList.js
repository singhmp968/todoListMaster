import React, { Component } from "react";
import {
  deleteTodoItem,
  EnableTodaList,
  updateTodoItem,
} from "../actions/todos";
import '@fontsource/roboto/300.css';
import { Button } from "@mui/material";
import '../App.css';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showSearchResult:false,
      showEdit: false,
      editTodo: [],
    };
  }
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   this.props.dispatch(deleteTodoItem(1));
  // }
  handleEdtBtn = (toitm) => {
    console.log("todoListIndie", toitm);
    let showEditbtn = !toitm.showEdit;
    this.props.dispatch(EnableTodaList(toitm.id, showEditbtn));
  };
  updateInputValue = (e, todoitem) => {
    todoitem.title = e.target.value;
    console.log("id", todoitem);
    // const { id } = todoitem;
    // let { editTodo } = this.state;
    // console.log("editTodo", editTodo);

    // this.setState({
    //   todoitem,
    // });
    // console.log("target--", this.state);
  };
  handleSubmitBtn = (todoitem) => {
    console.log("iems", todoitem);
    this.props.dispatch(EnableTodaList(todoitem.id, !todoitem.showEdit));
    this.props.dispatch(updateTodoItem(todoitem));
  };
  handleDeleteBtn = (todoItemId) => {
    this.props.dispatch(deleteTodoItem(todoItemId));
  };

  handleCheck = (todoItemId) => {
    console.log("todoItemId", todoItemId);
    // logic to make check un check
  };

  render() {
    // console.log("todoListIndie", this.props);
    const { todolsits } = this.props;
    console.log("todolsitsInsideHere----", this.props);
    const { showEdit } = this.state;
    console.log("showEdit", showEdit);
    return (
      <div>
        {
          todolsits.map((toitm) => (
            <div className="todolist-wrapper" key={toitm.id}>
              <div className="todolist-header">
                <div className="todolist-id"> {toitm.id}</div>
                {/* {toitm.showEdit + ""} */}
                {!toitm.showEdit && (
                  <div>
                    <div className="todolist-title">{toitm.title.substring(1,20) + '...'} </div>
                    {/* <div className="todoItem-body">{toitm.body}</div> */}
                    <div className="todolist-completed">
                      {/* {toitm.completed + ""} */}
                    </div>
                    <div>
                      <span className="mr8px">
                      <Button 
                        id="edit-btn" variant="contained"
                        onClick={() => this.handleEdtBtn(toitm)}
                      >
                        Edit
                      </Button >
                      </span>
                      
                      <Button 
                        variant="contained"
                        color="error"
                        id="edit-btn"
                        onClick={() => this.handleDeleteBtn(toitm.id)}
                      >
                        Delete{" "}
                      </Button >
                      <input
                        type="checkbox"
                        checked={toitm.completed}
                        onClick={() => this.handleCheck(toitm.id)}
                      ></input>
                    </div>
                  </div>
                )}
                {toitm.showEdit && (
                  <div>
                    <div className="todolist-title">
                      <input
                        type="text"
                        // ={toitm.titvaluele}
                        defaultValue={toitm.title}
                        onChange={(evt) => this.updateInputValue(evt, toitm)}
                      ></input>
                    </div>
                    <div className="todolist-completed">
                      {toitm.completed + ""}
                    </div>
                    <button
                      id="edit-btn"
                      onClick={() => this.handleSubmitBtn(toitm)}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
          /* {todolsits.map((todoitem) => {
          <div className="mainTodoListContainer" key={todoitem.id}>
            <div> {todoitem} </div>
          </div>;
        })} */
        }
      </div>
    );
  }
}
export default TodoList;
