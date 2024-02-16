# Assignment: DOM Manipulation and Data Fetching with JavaScript

## Description

For this assignment, we're going to take a reasonably sized leap and leverage what we've learned about JavaScript to begin creating a more interactive web page.

Namely, we'll be fetching Pokemon from the API we've been using for samples in class. Instead of just fetching one Pokemon, we'll be fetching multiple with each having its own text box and button to update the displayed Pokemon. Think of these as Pokemon "cards."

In doing so, we'll see how we can attach event listeners, fetch data, and dynamically create new elements and insert them into the DOM.

We'll also keep up with our CSS work and use flexbox to lay out the Pokemon cards so they wrap to the next row and so on.

See the attached video, as well, for the expected behavior of the assignment.

You can find the Pokemon API here. Links to an external site.

Please note: We're not using React with this assignment. We're using plain JavaScript and DOM APIs for this assignment.

## Grading Criteria

### HTML

- Link tag referencing and including your CSS styles (1)
- Includes a text input and submit button contained within a form element (3)
- Script tag referencing and including your JavaScript (1)

### CSS

- Pokemon container/cards displayed using flexbox (1)
- flex-wrap rule used to flow the flexbox items to the next line (1)

### JavaScript

- Event listener for the static form on the base HTML page set to intercept "submit" events (2)
- A fetch call to the Pokemon API (1)
- Using a Promise chain (```.then(() => { ... }```) or `async/await to parse the body and return the JSON (2)
- Creating the Pokemon card (10)
  - An image tag with the src and alt attributes set
  - Some text with two pieces of information from the JSON response (i.e. the name and ID)
  - Add a form to update the displayed Pokemon
    - Add a text input with the name of the Pokemon pre-filled (use the "value" attribute on the element to pre-fill it)
    - Add a button allows for updating the displayed Pokemon
    - Add an event listener for the form that accepts a "submit" event
- Inserting the Pokemon card into the page (2)
  - You may insert this at a specific place or just append it to the body
- Updating an already added Pokemon (4)
  - The update event listener method should update the Pokemon image and text (Hint: Create a method that accepts the container element for the Pokemon image and text so you can easily get the children tags and update their attributes accordingly)

### Grading

- Provide a zip file containing all your HTML, CSS, and JavaScript (2)
  - Note: Please use relative paths so that grading can be done on any file system and operating system.
