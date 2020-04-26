import React from 'react';

const Header = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center">
          <img src="./react-redux-logo-2.png" className="redux-logo" alt="Redux Logo" />
          <h1 className="h3 mb-0">React-Redux Todo App</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;