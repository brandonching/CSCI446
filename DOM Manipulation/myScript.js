// On page load, get the list of Pokemon from the API
let pokemonList = [];
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
      pokemonList.push(data.results[i].name);
    }

    if (data.next) {
      // If there is a next page, recursively fetch the next page
      await fetchData(data.next);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000");

// Add a card to the card container
createCard("pikachu").then((card) => {
  document.getElementById("card-container").appendChild(card);
});

// Load Pokemon button click event listener and function
document.getElementById("submit").addEventListener("click", buttonClicked);

async function buttonClicked() {
  // Get the value of the input field and clear
  const input = document.getElementById("input-name").value;
  document.getElementById("input-name").value = "";
  document.getElementById("submit").disabled = true;

  // Create a card using the data and append it to the card-container
  const card = await createCard(input);
  document.getElementById("card-container").appendChild(card);
}

// Function to fetch Pokemon data
async function fetchPokemonData(input_name) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input_name.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Get the JSON data from the response and return it
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Create a new Card
async function createCard(input) {
  // Get the Pokemon data
  const data = await fetchPokemonData(input);
  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const imageUrl = data.sprites.front_default;

  // Create a new div element
  const card = document.createElement("div");

  // Add a class to the div
  card.classList.add("card");
  card.style.margin = "10px";
  card.style.width = "300px";
  card.style.height = "auto";

  // Create the card content
  card.innerHTML = `
    <div class="card-header">
        <p class="card-header-title">${name}</p>
        <button class="card-header-icon" aria-label="more options" id="delete">
            <div class="delete"></div>
        </button>
    </div>
    <div class="card-image">
        <figure class="image is-square">
            <img src="${imageUrl}" alt="Image of ${name}" />
        </figure>
    </div>
    <div class="card-content">
        <div class="content">
            <p id="type">Type: ${data.types[0].type.name}</p>
            <p>Stats:</p>
            <ul>
                <li id="hp">HP: ${data.stats[0].base_stat}</li>
                <li id="attack">Attack: ${data.stats[1].base_stat}</li>
                <li id="defense">Defense: ${data.stats[2].base_stat}</li>
                <li id="special-attack">Special Attack: ${data.stats[3].base_stat}</li>
                <li id="special-defense">Special Defense: ${data.stats[4].base_stat}</li>
                <li id="speed">Speed: ${data.stats[5].base_stat}</li>
            </ul>
            
        </div>
    </div>
    <footer class="card-footer">
        <input value="${name}" />
        <a href="#" class="card-footer-item">Update</a>
    </footer>
    `;

  // Add an event listeners
  card.querySelector("a").addEventListener("click", updateCard);
  card.querySelector("#delete").addEventListener("click", deleteCard);

  return card;
}

// Function to delete the card
function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
}

// Function to update the card
async function updateCard() {
  // Get the value of the input field
  const input = this.previousElementSibling.value;

  // check if the input is valid
  if (pokemonList.includes(input.toLowerCase()) === false) {
    alert("Invalid Pokemon name");
    return;
  }

  // Get the Pokemon data
  const data = await fetchPokemonData(input);
  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const imageUrl = data.sprites.front_default;

  // Replace image and name in the card
  this.closest(".card").querySelector("img").src = imageUrl;
  this.closest(".card").querySelector(".card-header-title").textContent = name;
  this.closest(".card").querySelector(
    "#type"
  ).textContent = `Type: ${data.types[0].type.name}`;
  this.closest(".card").querySelector(
    "#hp"
  ).textContent = `HP: ${data.stats[0].base_stat}`;
  this.closest(".card").querySelector(
    "#attack"
  ).textContent = `Attack: ${data.stats[1].base_stat}`;
  this.closest(".card").querySelector(
    "#defense"
  ).textContent = `Defense: ${data.stats[2].base_stat}`;
  this.closest(".card").querySelector(
    "#special-attack"
  ).textContent = `Special Attack: ${data.stats[3].base_stat}`;
  this.closest(".card").querySelector(
    "#special-defense"
  ).textContent = `Special Defense: ${data.stats[4].base_stat}`;
  this.closest(".card").querySelector(
    "#speed"
  ).textContent = `Speed: ${data.stats[5].base_stat}`;
}

// Check if the input is valid
function validatePokemonInput() {
  var inputElement = document.getElementById("input-name");
  var errorMessage = document.getElementById("error-message");
  var submitButton = document.getElementById("submit");

  if (inputElement.value.trim() === "") {
    // If empty just grey out submit button
    inputElement.classList.remove("is-danger");
    errorMessage.style.display = "none";
    submitButton.disabled = true;
  } else if (pokemonList.includes(inputElement.value.toLowerCase()) === false) {
    // if the input is not in the list of pokemon
    inputElement.classList.add("is-danger");
    errorMessage.style.display = "block";
    submitButton.disabled = true;
  } else {
    // Pokemon name not valid
    inputElement.classList.remove("is-danger");
    errorMessage.style.display = "none";
    submitButton.disabled = false;
  }
}

// Create a random Pokemon card
function getRandomPokemon() {
  // clear the input field
  document.getElementById("input-name").value = "";
  document.getElementById("submit").disabled = true;

  // Get a random Pokemon from the list
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  const randomPokemon = pokemonList[randomIndex];

  // create a card using the random Pokemon
  createCard(randomPokemon).then((card) => {
    document.getElementById("card-container").appendChild(card);
  });
}

// Function to clear the card container
function clearCards() {
  // Alert the user to confirm
  if (!confirm("Are you sure you want to clear the cards?")) {
    return;
  }
  document.getElementById("card-container").innerHTML = "";
}

// Function to toggle the visibility of the card-content container
function toggleStats() {
  const cardContent = document.getElementsByClassName("card-content");
  if (cardContent.length === 0) {
    return;
  }
  const isVisible = cardContent[0].classList.contains("is-hidden");
  if (isVisible) {
    for (let i = 0; i < cardContent.length; i++) {
      cardContent[i].classList.remove("is-hidden");
    }
  } else {
    for (let i = 0; i < cardContent.length; i++) {
      cardContent[i].classList.add("is-hidden");
    }
  }
}
