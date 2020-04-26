import React from 'react'

import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = props => {

  const todos = props.todos.map(todo => <Todo id={todo.id} todoText={todo.text} completed={todo.completed} />);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <ul className="list-group mt-4 js-todo-list">
            {todos}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary mt-4 w-50 js-clear-btn d-none" type="button">Clear Todos</button>
        </div>
      </div>
      <hr className="mt-3" />
    </React.Fragment>
  );
};

const mapStateToProps = state => state.todoReducer ? state.todoReducer : {};

export default connect(mapStateToProps, null)(TodoList);