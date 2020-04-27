import React from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';
import clearTodos from '../redux/actions/clearTodos';

const TodoList = stateProps => {

  const activeFilter = stateProps.filterReducer.activeFilter;

  const todos = stateProps.todoReducer.todos.map(todo => (
    <Todo key={todo.id} id={todo.id} todoText={todo.text} completed={todo.completed} />
  ));

  const incompleteTodos = todos.filter(todo => !todo.props.completed);

  const completedTodos = todos.filter(todo => todo.props.completed);

  const renderTodos = filter => {
    if (filter === 'All') {
      return todos;
    } else if (filter === 'Incomplete') {
      return incompleteTodos;
    } else if (filter === 'Completed') {
      return completedTodos;
    }
  };

  const handleClearTodos = () => stateProps.clearTodos();

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <ul className="list-group mt-4 js-todo-list">
            {renderTodos(activeFilter)}
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

const mapStateToProps = state => {
  const { todoReducer, filterReducer } = state;
  return { todoReducer, filterReducer } || {};
}

export default connect(mapStateToProps, { clearTodos })(TodoList);