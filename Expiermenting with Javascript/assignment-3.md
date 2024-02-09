# Assignment: Experimenting with JavaScript

For this assignment, we'll experiment with some language features of JavaScript and do a little DOM manipulation.

Using the following page skeleton:

```html
<html>
<head>
  <title>Experiments with JavaScript</title>
</head>
<body>
  <button>Click me</button>
  <pre>
    <script src="myScript.js"></script>
  </pre>
</body>
</html>
```

Add the following into the `myScript.js` file (point values in parenthesis):

1. Define a class using the ES6 class syntax (3)
2. Add a constructor that takes a value
3. Define at least one function on the class that calls the `document.writeln` function and prints the value that was sent into the constructor
4. Extend that class (inherit from it) with a second class (4)
   - Make sure the constructor calls `super()` of the parent class
   - Add one more method to the new class that uses the `document.writeln` function
5. Instantiate both classes (2)
6. Call the function on the instance of the parent class and also on the child class (two function calls, one on each class instance) (2)
7. Add a function to the prototype of the parent object (1)
8. Call the added function from the instance of the child class (1)
9. Create an event listener for the button (1)
10. Write a function to handle the event (1)
    - Pop an alert box that the button has been pressed
11. Correct syntactic structures were used (2)
