# Assignment: JSON API with Express.js

## Description

We're going to build a simple REST API with ExpressJS. We'll then test it out and kick the tires with Postman to make sure the API behaves the way we expect.

Since this is the first time we're building a JSON API, we'll start with just one resource.

We'll use a `Todo` as the entity this API will create, retrieve, update, and delete.

Because we haven't covered MongoDB yet, we'll use the filesystem as our data store. Operations that modify (create, update, delete) the entity should read and write a JSON file stored on your local filesystem (Use the `storage/` folder in the project starter).

The `Todo` entity should have, at a minimum, the following fields/properties:

- ID (use UUIDs to ensure uniqueness, though monotonically increasing IDs also work)
- Description (a string representing the task)
- Completed (a boolean value)

More specifically, the JavaScript object for a minimal `todo` should look something like:

```
import { v4 as uuidv4 } from 'uuid';

const sampleTodo = {
 id: uuidv4(),
 description: "some sample task",
 completed: false,
};
```

Todo API Endpoints

- GET `/todo`
- GET `/todo/:todoId`
- POST `/todo`
- PUT `/todo/:todoId`
- DELETE `/todo/:todoId`

### Testing your API

Install and use Postman Links to an external site. to test your API and make sure that your requests succeed appropriately. If a request seems to hang, check the terminal window running your Express server to identify if an exception was thrown.

## JavaScript (18)

- Attach a separate `todosRouter` to the Express.js server (recall the `app.use(Router)` method) (3)
- Each of the prescribed routes above are implemented in your Express application (15; three points per route)
  - For GET requests, data should be read from filesystem
  - For POST/PUT/DELETE requests, data should be persisted to the filesystem

## Grading (2)

- Zip up your code for grading (2)
- It's recommended to delete your `node_modules` directory so your file size will be smaller, but it's not required.
