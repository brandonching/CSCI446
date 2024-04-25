import React, { useState, useEffect } from "react";
import { useParams, Link } from "@remix-run/react";

function ProjectDetailsPage() {
  const { projectId, todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/project/${projectId}/todo/${todoId}`
        );
        const data = await response.json();
        setTodo(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchTodo();
  }, [projectId, todoId]);

  return (
    <div className="container">
      <h2 className="title">Todo Details</h2>
      {todo ? (
        <div>
          <p>
            <strong>Todo ID:</strong> {todo._id}
          </p>
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <p>
            <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
          </p>
          <p>
            <strong>Project ID:</strong>{" "}
            <Link to={`/project/${todo.project_id}/todo`}>
              {todo.project_id}
            </Link>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
