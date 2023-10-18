import React from "react";
import { connect } from "react-redux";
import { fetchTodaList } from "../actions/todos";
import AddTodoItem from "./AddTodoItem";
import TodoList from "./TodoList";
class App extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchPosts());
    console.log("props is", this.props);
    this.props.dispatch(fetchTodaList());
  }

  render() {
    console.log("PROPS", this.props);
    const { todolsits } = this.props;
    return (
      <div className="mainBody">
        <AddTodoItem></AddTodoItem>
        <TodoList todolsits={todolsits} dispatch={this.props.dispatch} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log("statestate", state);
  return {
    todolsits: state.todolsits,
  };
}
export default connect(mapStateToProps)(App);
