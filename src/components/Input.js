import React from 'react'

function Input() {
  return (
    <div class="row">
      <div class="col-12">
        <div class="input-group my-3">
          <input type="text" class="form-control" placeholder="Enter a todo..." aria-label="Enter a todo..." aria-describedby="basic-addon" />
          <div class="input-group-append">
            <button class="btn btn-outline-primary js-add-todo" type="button">Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input;