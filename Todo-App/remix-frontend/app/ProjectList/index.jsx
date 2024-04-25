import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

function ProjectListPage() {
  // Initialize state for projectList
  const [projectList, setProjectList] = useState([]);

  // Call the API to get the list of projects when component mounts
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("http://localhost:3001/project");
        const data = await response.json();
        setProjectList(data); // Update projectList state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProjects();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div className="container">
      <h2 className="title">Project List</h2>
      <table className="table is-bordered is-striped is-narrow is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((project) => (
            <tr key={project._id}>
              <td>
                <Link to={`/project/${project._id}/todo`}>{project._id}</Link>
              </td>
              <td>{project.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectListPage;
