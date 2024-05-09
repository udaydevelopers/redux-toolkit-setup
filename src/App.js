import React from 'react';
import Counter from './modules/counter';
import Todo from './modules/todo';

const App = () => {
  return (
    <div>
      <h1>My Modular Redux App</h1>
      <Counter />
      <Todo />
    </div>
  );
};

export default App;
