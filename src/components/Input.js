import React, { useState } from 'react'

const Input = () => {
  const [input, setInput] = useState('');
  const handleInputChange = e => setInput(e.target.value);

  return (
    <div class="row">
      <div class="col-12">
        <div class="input-group my-3">
          <input value={input} onChange={handleInputChange} type="text" class="form-control" placeholder="Enter a todo..." aria-label="Enter a todo..." aria-describedby="basic-addon" />
          <div class="input-group-append">
            <button class="btn btn-outline-primary js-add-todo" type="button">Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;