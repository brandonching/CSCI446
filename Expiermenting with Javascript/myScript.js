// Define a class using the ES6 class syntax
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  // Function to display car information
  print() {
    document.writeln(`
      Make: ${this.make}<br>
      Model: ${this.model}<br>
      Year: ${this.year}<br>
      Color: ${this.color}<br>
    `);
  }

  // Method to change car color
  changeColor(color) {
    this.color = color;
  }
}

// Create a class that extends another class
class SportsCar extends Car {
  constructor(make, model, year, color, horsepower) {
    super(make, model, year, color);
    this.horsepower = horsepower;
  }

  // Override the print method
  print() {
    document.writeln(`
      Make: ${this.make}<br>
      Model: ${this.model}<br>
      Year: ${this.year}<br>
      Color: ${this.color}<br>
      Horsepower: ${this.horsepower}<br>
    `);
  }

  // Method to change sports car horsepower
  changeHorsepower(horsepower) {
    this.horsepower = horsepower;
  }
}

// Instantiate both classes
const car = new Car("Toyota", "Corolla", 2015);
const sportsCar = new SportsCar("Dodge", "Viper", 2017, "black", 645);

// Call the print method on each instance
car.print();
sportsCar.print();

// Event listener for the button click
document.getElementById("button").addEventListener("click", buttonClicked);

// Function to handle the button click event
function buttonClicked() {
  // Change the color of the car
  sportsCar.changeColor("blue");

  // Display an alert indicating the button was clicked
  alert("The button was clicked\n");
}
