# Assignment: Adding Persistence with MongoDB

## Description

Let's extend our single page application one more time from Your First Single Page App (SPA). This time, we'll add a new resource and migrate our backend server from persisting to the filesystem to persisting to MongoDB!

You'll use the same directory structure as before with a backend and frontend folder. This will require modifying both the frontend code to add some new browser routes and the backend server to add a new router and persist to MongoDB.

### Frontend

The following routes/pages should exist or be be added to your application:

- ```/project``` — should be a listing of all the projects in your ```projects``` Mongo collection
- ```/project/new``` – display a form that can create a new project

- ```/project/:projectId``` — list all the todos in the project with links to each particular todo

- ```/project/:projectId/todo/new``` — display a form that can create a new todo for the specified project

- ```/project/:projectId/todo/:todoId``` — display detailed information about the specific todo

### API Routes

We will build out a router in our backend API for ```project``` resources. We'll nest the ```todo``` router underneath the ```project``` API so we can get both the IDs of ```todo```s and ```project```s without having to repeat ourselves. Our API should have the following routes:

### Projects

- ```GET /project```
- ```GET /project/:projectId```
- ```POST /project```

### Todos

- ```GET /project/:projectId/todo```
- ```GET /project/:projectId/todo/:todoId```
- ```POST /project/:projectId/todo```

Your ```Todo``` router should be nested under your ```Project``` router. Example:

```js
// projects.js
import express from "express";
import TodosRouter from "./todos.js";

const ProjectsRouter = express.Router();

TodosRouter.mergeParams = true;
ProjectsRouter.use("/:projectId/todos", TodosRouter);
```

Note: The ```projectId``` will be accessible via ```req.params.projectId``` in your ```TodosRouter```.

### Data Model

These are the minimum attributes I'm expecting to be in your documents:

### Projects

- ```_id```: can be Mongo's ObjectId if desired
- ```name```: string

### Todos

- ```_id```: can be Mongo's ObjectId if desired
- ```name``` (or ```title```): string
- ```description```: string
- ```completed```: boolean
- ```project_id```: foreign ID of the project the todo belongs to

### Criteria

Backend (18)

- Each route specified has been defined on the backend server (3 points each)

Frontend (27)

- The specified routes are defined using React Router (4)
- The ```/project``` route displays a listing of all projects (4)
- The```/project/new``` route displays a form to create a new project. This should accept the name of the project (3)
- The ```/project/:projectId/todo``` route displays all todos for that specific project (4)
- The ```/project/:projectId/todo/:todoId``` route displays the name, description, and completion status of a specific todo (4)
- The ```/project/:projectId/todo/new``` route displays a form to create a new todo. This should be a form accepting the name, description, and completed status. The data should be posted to the server and persisted to the database (6)
- Some CSS is included to style the page accordingly. Not much emphasis will be put on appearance as we're focusing on functionality here. Make it look as nice as you want it to, but use some CSS (at least two rules) (2)

### Data Model (7)

- The entities use (at a minimum) the specified properties (7 points)

### Grading (2)

- Zip up your code for grading (2)

### Hints

- Make sure you're using the CORS middleware. Links to an external site. in your backend server process.
- When making ```fetch``` requests with HTTP methods/verbs other than ```GET```, make sure to include the body, where appropriate, and use ```JSON.stringify``` to convert the payload into something the server can parse. You'll also need to set the ```Content-Type``` header in the request, as well. For example:

```js
fetch("localhost:8000/project/1/todo", {
 method: "POST",
 body: JSON.stringify(todo),
 mode: 'cors',
 headers: {
  'Content-Type': 'application/json'
 }
})
```

- I'd suggest not using MongoDB's ```ObjectId``` type for the document ID since it requires wrapping the supplied value in an ```ObjectId``` object.
- If you use a numeric ID, make sure to cast it when using it in a Mongo filter as it will be of type ```string``` when you read it from ```req.params```; you can cast it using the ```Number()``` function, i.e.```Number(req.params.storeId)```
