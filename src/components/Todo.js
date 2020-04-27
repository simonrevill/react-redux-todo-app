import React, { useState } from 'react'

import { connect } from 'react-redux';

import toggleTodo from '../redux/actions/toggleTodo';

const Todo = ({ id, todoText, completed, toggleTodo }) => {

  const handleToggleTodo = () => toggleTodo(id);

  return (
    <li className="list-group-item js-todo-list" id={id}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className={'todo-text' + (completed ? ' todo-text--complete' : '')}>{todoText}</span>
        <div className="d-flex justify-content-between todo-controls">
          <i className={(completed ? 'fas ' : 'far ') + 'fa-check-square ' + (completed ? 'todo-controls__checked' : 'todo-controls__check')} onClick={handleToggleTodo}></i>
          <i className="far fa-trash-alt todo-controls__delete"></i>
        </div>
      </div>
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
