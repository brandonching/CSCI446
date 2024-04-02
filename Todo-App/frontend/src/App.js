import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList/index";
import TodoDetails from "./pages/TodoDetailed/index";
import NewTodoForm from "./pages/NewTodo/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/todo/:id" element={<TodoDetails />} />
          <Route path="/todo/new" element={<NewTodoForm />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
