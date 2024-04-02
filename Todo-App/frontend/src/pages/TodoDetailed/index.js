import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TodoDetailsPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(`http://localhost:3001/todo/${id}`);
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [id]);

  return (
    <div className="container">
      <h2 className="title">Todo Details</h2>
      {todo ? (
        <div>
          <p>
            <strong>ID:</strong> {todo.id}
          </p>
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <p>
            <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TodoDetailsPage;
