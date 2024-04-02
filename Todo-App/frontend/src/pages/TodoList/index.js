import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import icons from Font Awesome

function TodoListPage() {
  // Initialize state for todoList
  const [todoList, setTodoList] = useState([]);

  // Call the API to get the list of todos when component mounts
  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("http://localhost:3001/todo");
        const data = await response.json();
        setTodoList(data); // Update todoList state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTodos();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div className="container">
      <h2 className="title">Todo List</h2>
      <table className="table is-bordered is-striped is-narrow is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.id}>
              <td>
                <Link to={`/todo/${todo.id}`}>{todo.id}</Link>
              </td>
              <td>{todo.description}</td>
              <td>
                {todo.completed ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoListPage;
