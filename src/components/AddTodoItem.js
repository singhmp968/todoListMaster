import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodoItem } from "../actions/todos";

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newBody: "",
      userId: "",
    };
    console.log("props---", this.props);
  }
  handleAddTitleChange = (e) => {
    console.log("dasda", e.target.value);
    this.setState({
      newTitle: e.target.value,
    });
  };

  handleAddTodoChange = (e) => {
    console.log("dasda", e.target.value);
    this.setState({
      newBody: e.target.value,
    });
  };
  handleAddUserIdChange = (e) => {
    console.log("dasda", e.target.value);
    this.setState({
      userId: e.target.value,
    });
  };

  handleAdd = () => {
    // console.log("bagatsingh", this.state);
    let newStste = this.state;

    console.log("bagatsingh", newStste);
    this.props.dispatch(createTodoItem(newStste));

    this.setState({
      newTitle: "",
      newBody: "",
      userId: "",
    });
    console.log("shukla====", this.state);
  };
  render() {
    return (
      <div>
        <div className="search-container">
          <input onChange={this.handleAddTitleChange} placeholder="Add title" />
          <input onChange={this.handleAddTodoChange} placeholder="Add Todo" />
          <input
            onChange={this.handleAddUserIdChange}
            placeholder="Add your user Id"
          />
          <button id="search-btn" onClick={this.handleAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("statestateAddTodoItem", state);
  return {
    todolsits: state.todolsits,
  };
}
export default connect(mapStateToProps)(AddTodoItem);
// export default AddTodoItem;
