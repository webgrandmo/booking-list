//Book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI contructor

function UI() { }

UI.prototype.addBookToList = function (book) {
  console.log(book);

  const bookList = document.getElementById('book-list'),
    row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
  `;

  bookList.appendChild(row);
}
//Clear fields
UI.prototype.clearFields = function (book) {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
//Add event listeners

document.getElementById('book-form').addEventListener('submit', function (e) {

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();
  ui.addBookToList(book);
  ui.clearFields();
  e.preventDefault()
});