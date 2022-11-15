import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      firstName: "Usama",
      lastName: "munir",
      email: "usamamunir882@gmail.com",
      completed: false,
    },
    {
      id: 2,
      firstName: "Ali",
      lastName: "munir",
      email: "usamamunir882@gmail.com",
      completed: false,
    },
    {
      id: 3,
      firstName: "Ahmad",
      lastName: "munir",
      email: "usamamunir882@gmail.com",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        completed: false,
      };
      console.log("abcx", newTodo);
      state.push(newTodo);
    },

    removeTodo: (state, action) => {
      state = action.payload.todosData ;
      return state
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].firstName = action.payload.firstName;
      state[index].lastName = action.payload.lastName;
      state[index].email = action.payload.email;
    },
    todoCompleted: (state, action) => {
      state = action.payload.todocheckedArray;
     
    },
    // filterTodo:(state,action)=>{
    //   state = action.payload.todosData
     
    // },
    // filterTodoFisrtName:(state,action)=>{
    //   state = action.payload.todosData

    // }

  },
});

export const getData = (state)=> state.todos
export const {
  addTodo,
  toogleComplete,
  removeTodo,
  updateTodo,
  todoCompleted,
  // filterTodo,
  // filterTodoFisrtName
} = todoSlice.actions;
export default todoSlice.reducer;
