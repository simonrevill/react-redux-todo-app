import React from 'react'

function Todo() {
  return (
    <li className="list-group-item js-todo-list">
      <div class="d-flex justify-content-between align-items-center w-100">
        <span class="todo-text"></span>
        <div class="d-flex justify-content-between todo-controls">
          <i class="far fa-check-square todo-controls__check"></i>
          <i class="fas fa-check-square todo-controls__checked d-none"></i>
          <i class="far fa-trash-alt todo-controls__delete"></i>
        </div>
      </div>
    </li>
  );
};

export default Todo;
