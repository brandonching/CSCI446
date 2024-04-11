import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList/index";
import TodoDetailed from "./pages/TodoDetailed/index";
import NewTodoForm from "./pages/NewTodo/index";
import ProjectList from "./pages/ProjectList/index";
import NewProject from "./pages/NewProject/index";
import ProjectDetailed from "./pages/ProjectDetailed/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/project/:projectId/todo/:todoId" element={<TodoDetailed />} />
          <Route path="/todo/new" element={<NewTodoForm />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/" element={<TodoList />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/project/new" element={<NewProject />} />
          <Route path="/project/:projectId/todo" element={<ProjectDetailed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
