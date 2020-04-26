import React from 'react'

const Todo = ({ id, todoText, completed }) => {
  return (
    <li className="list-group-item js-todo-list" id={id}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="todo-text">{todoText}</span>
        <div className="d-flex justify-content-between todo-controls">
          {/* SORT OUT CONDITIONAL CLASSNAMES FOR COMPLETED PROP */}
          <i className="far fa-check-square todo-controls__check"></i>
          <i className="fas fa-check-square todo-controls__checked d-none"></i>
          <i className="far fa-trash-alt todo-controls__delete"></i>
        </div>
      </div>
    </li>
  );
};

export default Todo;
