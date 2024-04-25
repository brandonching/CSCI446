import React, { useState } from "react";

export const clientLoader = async ({ request }) => {
  // You can perform any data loading or initialization here
  return {
    // Return any data that you want to pass to the component
  };
};

function NewProjectFormPage() {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/project", { // Assuming the route is relative
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });

      if (response.ok) {
        console.log("New project created successfully!");
        // Clear form fields after successful submission
        setName("");
        setCompleted(false);
      } else {
        console.error("Failed to create new project.");
      }
    } catch (error) {
      console.error("Error creating new project:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Project Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter project name"
              required
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Create Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewProjectFormPage;
