import React from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';
import clearTodos from '../redux/actions/clearTodos';

const TodoList = stateProps => {

  const todos = stateProps.todos.map(todo => (
    <Todo key={todo.id} id={todo.id} todoText={todo.text} completed={todo.completed} />
  ));

  const handleClearTodos = () => stateProps.clearTodos();

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
          <button className={'btn btn-primary mt-4 w-50 js-clear-btn' + (!todos.length ? ' d-none' : '')} onClick={handleClearTodos} type="button">Clear Todos</button>
        </div>
      </div>
      <hr className="mt-3" />
    </React.Fragment>
  );
};

const mapStateToProps = state => state.todoReducer ? state.todoReducer : {};

export default connect(mapStateToProps, { clearTodos })(TodoList);