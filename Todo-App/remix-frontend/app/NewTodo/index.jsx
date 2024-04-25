import React, { useState } from "react";
import { useParams } from "@remix-run/react";

function NewTodoFormPage() {
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const { projectId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3001/project/${projectId}/todo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: description,
            completed: completed,
            project_id: projectId,
          }),
        }
      );

      if (response.ok) {
        console.log("New todo created successfully!");
        // Clear form fields after successful submission
        setDescription("");
        setCompleted(false);
      } else {
        console.error("Failed to create new todo.");
      }
    } catch (error) {
      console.error("Error creating new todo:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter todo description"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Create Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewTodoFormPage;
