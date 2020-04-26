import React from 'react'

import Todo from './Todo';

function TodoList() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-12">
          <ul class="list-group mt-4 js-todo-list">
            <Todo />
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-primary mt-4 w-50 js-clear-btn d-none" type="button">Clear Todos</button>
        </div>
      </div>
      <hr class="mt-3" />
    </React.Fragment>
  );
};

export default TodoList;