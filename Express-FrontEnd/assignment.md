# Assignment: Your First Single Page App (SPA)

## Description

Let's bring the Express server we created in the last assignment along with us and build a single page frontend using React and React Router!

This is a full-stack(ish; no database yet!) assignment, so we'll have a frontend React application talking to our Express server. Our React frontend will use ```fetch``` requests to to retrieve or send data to our server.

For grading, resubmit your Express application from Assignment 6 – JSON APIs in Express and the React code for the frontend. We'll ```run npm start``` on both applications. For testing purposes, do the same – ensure both applications are running when attempting to test your frontend.

## Frontend

The frontend should use React and React Router. The following routes/pages should be in your application:

- ```/todo``` — Show a list of all ```todo``` objects
- ```/todo/:todoId``` — Show a detailed view of this specific ```todo``` object
- ```/todo/new``` — Present a form that can be used to create a new ```todo``` object

## API Routes

We're going to fully reuse the application from Assignment 6 – JSON APIs in Express.

## Criteria

### Frontend (20)

- The specified routes are defined using React Router (4)
- The ```/todo``` route displays a listing of all todo (4)
- The ```/todo/:todoId``` route displays the specified todo object's description and completed attribute (4)
- The ```/todo/new``` route should show a form that can be submitted to create a new todo object (6)
- Some CSS is included to style the page accordingly. Not much emphasis will be put on appearance as we're focusing on functionality here. Make it look as nice as you want it to, but use some CSS (at least two rules) (2)
  - Optionally, you may use a CSS framework (i.e. Tailwind, Bootstrap)

### Grading (2)

- Zip up your code for grading (2)

### Hints

- Copy over your Express server into a folder named ```backend/``` (or something similar)
- Create your ```create-react-app``` in a folder named```frontend/``` (or something similar)
- Make sure you're using the [CORS middleware](https://expressjs.com/en/resources/middleware/cors.html). Links to an external site. in your backend server process.
- When making ```fetch``` requests with HTTP methods/verbs other than ```GET```, make sure to include the body, where appropriate, and use```JSON.stringify``` to convert the payload into something the server can parse. You'll also need to set the ```Content-Type header``` in the request, as well. For example:

```js
fetch("<http://localhost:8000/todo>", {
 method: "POST",
 body: JSON.stringify(item),
 mode: 'cors',
 headers: {
  'Content-Type': 'application/json'
 }
})
```
