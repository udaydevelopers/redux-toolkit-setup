import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter/counterSlice';
import todoReducer from './modules/todo/todoSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;
