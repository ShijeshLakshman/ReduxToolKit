import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';

const initialState = {
 todoList:[],
 status:'idle',
 message:null,
 error:null
};

export const getUsers = createAsyncThunk(
  'toDo/getUsers',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get('https://gorest.co.in/public/v1/users');
      console.log('RESPONSE', response);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
   addToDo:(state,action)=>{
       console.log("ACTION IN ===>",action,state);
       state.todoList.push(action.payload)
   },
    removeTodo:(state,action)=>{
       state.todoList.splice(action.payload,1)
   }
  },
  extraReducers: {
     [getUsers.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // state.message = action?.payload?.message;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {addToDo,removeTodo} = toDoSlice.actions;

export default toDoSlice.reducer;
