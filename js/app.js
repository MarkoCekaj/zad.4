const books = [
  { name: "GOT", year: 1992 },
  { name: "Secret", year: 1981 },
  { name: "Don Quihote", year: 1991 },
  { name: "Ulyses", year: 1999 },
];

//document.querySelector takes a css selector and returns the first element that matches that selector
const mainDiv = document.querySelector("main"); // returns the one main element in our html

//below we will add our form inputs to some global variables
const nameInput = document.querySelector('input[name="name"]'); //selecting the input with name property "name"
const yearInput = document.querySelector('input[name="year"]'); //selecting the input with name property "name"
const createButton = document.querySelector("button#createitem"); //select button with id "createitem"

//below we will add our update form inputs to some global variables
const updateName = document.querySelector('input[name="updatename"]'); //selecting the input with name property "name"
const updateYear = document.querySelector('input[name="updateyear"]'); //selecting the input with name property "name"
const updateFormButton = document.querySelector("button#updateitem"); //select button with id "createitem"

///////////////////////
// Functions
///////////////////////

//define function for rendering current data to DOM, use this whenever data changes
const renderData = () => {
  //empty of the main div of any existing content
  mainDiv.innerHTML = "";

  //let us loop over the people array
  books.forEach((book, index) => {
    const bookH1 = document.createElement("h1"); // Creates new h1 element

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
      updateFormButton.setAttribute("toupdate", index); //custom attribute to use in the button event later
    });
    buttonContainer.appendChild(updateButton); //apend the delete button

    bookH1.innerText = ` Book :${book.name} Published: ${book.year}`; //ads text to the h1
    mainDiv.appendChild(bookH1); //append the h1 to the main element
    mainDiv.appendChild(buttonContainer); //append container of update and delete button
  });
};

const createData = () => {
  const name = nameInput.value; //store value from name input into name variable
  const year = yearInput.value; //store value from age input into age variable
  const newBook = { name, year }; // create new person object
  books.push(newBook); //push the new person object into the array
  renderData(); //render the data again so it reflects the new data
};

const updateData = (event) => {
  const index = event.target.getAttribute("toupdate"); //get index we stored via custom attribute
  const name = updateName.value; //get value from form
  const year = updateYear.value; //get value from form
  books[index] = { name, year }; //replace existing object at that index with a new with updated values
  renderData(); //update the DOM with the new data
};

////////////////////
// Main App Logic
////////////////////
renderData(); //call the render data function for the initial rendering of the data
createButton.addEventListener("click", createData); //trigger create data function whenever createButton is clicked
updateFormButton.addEventListener("click", updateData); //trigger update data function when updateButton is clicked
