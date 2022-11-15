
import UpdateContextProvider from "./components/context/updateContextProvider";
import {  Routes, Route } from "react-router-dom";
// import SampleForm from "./components/sampleForm/SampleForm";


import "./App.css";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";


function App() {
  return (
    <div>
    <UpdateContextProvider>
      <Routes>
       
        <Route path="/todoForm" element={<TodoForm />} />
        <Route path="/" element={<TodoList />} />
        {/* <Route path="/" element={<SampleForm/>} /> */}
      </Routes>
    </UpdateContextProvider>
    {/* <SampleForm/> */}
    </div>
  );
}

export default App;
