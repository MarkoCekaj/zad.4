const books = [
  {
    name: "GOT",
    year: 1996,
    author: "George R.R. Martin",
    genre: "Epic fantasy",
  },
  {
    name: "Secret",
    year: 2006,
    author: "	Rhonda Byrne",
    genre: "Self help",
  },
  {
    name: "Don Quixote",
    year: 1605,
    author: "Miguel de Cervantes",
    genre: "Novel",
  },
  {
    name: "Ulyses",
    year: 1922,
    author: "James Joyce",
    genre: "	Modernist novel",
  },
];

//document.querySelector takes a css selector and returns the first element that matches that selector
const mainDiv = document.querySelector("main"); // returns the one main element in our html

//below we will add our form inputs to some global variables
const nameInput = document.querySelector('input[name="name"]'); //selecting the input with name property "name"
const yearInput = document.querySelector('input[name="year"]'); //selecting the input with name property "name"
const authorInput = document.querySelector('input[name="author"]');
const genreInput = document.querySelector('input[name="genre"]');
const createButton = document.querySelector("button#createitem"); //select button with id "createitem"

//below we will add our update form inputs to some global variables
const updateName = document.querySelector('input[name="updatename"]'); //selecting the input with name property "name"
const updateYear = document.querySelector('input[name="updateyear"]'); //selecting the input with name property "name"
const updateAuthor = document.querySelector('input[name="updateauthor"]');
const updateGenre = document.querySelector('input[name="updategenre"]');

const updateFormButton = document.querySelector("button#updateitem"); //select button with id "createitem"

const renderData = () => {
  //empty of the main div of any existing content
  mainDiv.innerHTML = "";

  //let us loop over the people array
  books.forEach((book, index) => {
    const bookDiv = document.createElement("div"); // Creates new h1 element

    const buttonContainer = document.createElement("aside"); //create aside to store update/delete buttons

    //Delete Button
    const deleteButton = document.createElement(`button`); //create delete button
    deleteButton.id = index;
    deleteButton.innerText = "Delete"; //make the delete button say "Delete"
    deleteButton.addEventListener("click", (event) => {
      books.splice(index, 1); //remove the element at the current index
      renderData(); //re-render the updated data to the DOM
    });
    buttonContainer.appendChild(deleteButton); //apend the delete button

    //Update Button
    const updateButton = document.createElement(`button`); //create update button
    updateButton.id = index;
    updateButton.innerText = "Update"; //make the delete button say "Delete"
    updateButton.addEventListener("click", (event) => {
      updateName.value = book.name; //set form to show current name
      updateYear.value = book.year; //set form to show current age
      updateAuthor.value = book.author;
      updateGenre.value = book.genre;

      updateFormButton.setAttribute("toupdate", index); //custom attribute to use in the button event later
    });
    buttonContainer.appendChild(updateButton); //apend the delete button

    bookDiv.innerHTML = `<p> Book :${book.name}</p><p> Published : ${book.year}</p><p> Author : ${book.author} </p> <p>Genre : ${book.genre}</p>`;
    mainDiv.appendChild(bookDiv); //append the h1 to the main element
    mainDiv.appendChild(buttonContainer); //append container of update and delete button
  });
};

const createData = () => {
  const name = nameInput.value; //store value from name input into name variable
  const year = yearInput.value; //store value from age input into age variable
  const author = authorInput.value;
  const genre = genreInput.value;

  const newBook = { name, year, author, genre }; // create new person object
  books.push(newBook); //push the new person object into the array
  renderData(); //render the data again so it reflects the new data
};

const updateData = (event) => {
  const index = event.target.getAttribute("toupdate"); //get index we stored via custom attribute
  const name = updateName.value; //get value from form
  const year = updateYear.value; //get value from form
  const author = updateAuthor.value;
  const genre = updateGenre.value;

  books[index] = { name, year, author, genre }; //replace existing object at that index with a new with updated values
  renderData(); //update the DOM with the new data
};

renderData(); //call the render data function for the initial rendering of the data
createButton.addEventListener("click", createData); //trigger create data function whenever createButton is clicked
updateFormButton.addEventListener("click", updateData); //trigger update data function when updateButton is clicked
