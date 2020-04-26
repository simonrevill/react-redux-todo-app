import React, { useState } from 'react';
import { connect } from 'react-redux';
import addTodo from '../redux/actions/addTodo';
import { v4 as uuidv4 } from 'uuid';

const Input = props => {

  const [input, setInput] = useState('');

  const handleInputChange = e => setInput(e.target.value);

  const handleSubmitTodo = () => {
    props.addTodo(uuidv4(), input);
    setInput('');
  };

  const handleReturnKey = e => e.keyCode === 13 ? handleSubmitTodo() : null;

  return (
    <div className="row">
      <div className="col-12">
        <div className="input-group my-3">
          <input value={input} onChange={handleInputChange} onKeyUp={handleReturnKey} type="text" className="form-control" placeholder="Enter a todo..." aria-label="Enter a todo..." aria-describedby="basic-addon" />
          <div className="input-group-append">
            <button className="btn btn-outline-primary js-add-todo" onClick={handleSubmitTodo} type="button">Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addTodo }
)(Input);