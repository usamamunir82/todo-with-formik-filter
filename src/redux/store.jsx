import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './reducers/counterReducer/CounterReducer.jsx'
import todoSlice from "./reducers/todoReducer/todoSlice.jsx";

export  const store=configureStore({
    reducer: {
        counter: CounterReducer,
        todos:todoSlice,
    },
    
})