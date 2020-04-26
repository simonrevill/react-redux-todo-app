import React from 'react';

import Header from './Header';
import Input from './Input';
import Filters from './Filters';

function App() {
  return (
    <div className="container py-4">
      <Header />
      <Input />
      <Filters />
    </div>
  );
}

export default App;
