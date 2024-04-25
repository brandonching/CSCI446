import React, { useState, useEffect } from "react";
import { useParams, Link } from "@remix-run/react";

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/project/${projectId}`
        );
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchTodo();
  }, [projectId]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/project/${projectId}/todo`
        );
        const data = await response.json();
        setTodos(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [projectId]);

  return (
    <div className="container">
      <h2 className="title">Project Details</h2>
      {project ? (
        <div>
          <p>
            <strong>ID:</strong> {project._id}
          </p>
          <p>
            <strong>Name:</strong> {project.name}
          </p>

          <h3 className="title">Todos</h3>
          <table className="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  <td>
                    <Link to={`/project/${project._id}/todo/${todo._id}`}>
                      {todo._id}
                    </Link>
                  </td>
                  <td>{todo.description}</td>
                  <td>{todo.completed ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={`/project/${project._id}/todo/new`} className="button">New Todo</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
