import React from 'react';

import Header from './Header';
import Input from './Input';
import Filters from './Filters';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="container py-4">
      <Header />
      <Input />
      <Filters />
      <TodoList />
    </div>
  );
};

export default App;
