import {combineReducers} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
import toDoSlice from './slice/toDoSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  toDo: toDoSlice
});

export default rootReducer;