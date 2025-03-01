import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello World',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
  },
});

export const { addToDo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
