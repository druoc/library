//array which will store all the book objects
let myLibrary = [];

//global variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
const submit = document.getElementById('submit-button');

//submit button event listener and function
submit.addEventListener('click', () => {
    addBook();
});


//book object constructor
function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id;
}

//add book to library
function addBook() {
  const newBook = Object.create(Book);
  newBook.title = document.getElementById('bookname').value;
  newBook.author = document.getElementById('author').value;
  newBook.pages = document.getElementById('pages').value;
  newBook.isRead = document.getElementById('read-status').checked;
  newBook.id = myLibrary.length;
  myLibrary.push(newBook);
  libLoop(myLibrary);
  console.log('BOOK ADDED!')
}

//library lopp function
function libLoop() {
  myLibrary.forEach(addToTable);
}

//add book to table function
function addToTable(book) {
  const row = table.insertRow();

  const titleCell = row.insertCell(0);
  titleCell.textContent = book.title;

  const authorCell = row.insertCell(1);
  authorCell.textContent = book.author;

  const pagesCell = row.insertCell(2);
  pagesCell.textContent = book.pages;

  const readCell = row.insertCell(3);
  readCell.textContent = book.isRead;

  const remove = row.insertCell(4);
  remove.appendChild(removeBook(row, book));

  table.appendChild(row);
}

//remove book from table function
function removeBook(row, book) {
  const removeBtn = document.createElement('input');
  removeBtn.type = 'button';
  removeBtn.value = 'X';
  removeBtn.addEventListener('click', () => {
    let removed = myLibrary.splice(book.id, 1);
    row.parentNode.removeChild(row);
    myLibrary.forEach(book => book.id = myLibrary.indexOf(book));
  });
  return removeBtn;
}