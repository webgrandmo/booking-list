//Book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI contructor

function UI() { }


const ui = new UI();

UI.prototype.addBookToList = function (book) {

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
//Validate
UI.prototype.validate = function (book) {
  if (book.title === '' || book.author === '' || book.isbn === '') {

    ui.showAlert('Please fill all inputs', 'error');

  } else {

    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert('Booking added successfuly', 'success');
  }
}


UI.prototype.showAlert = function (msg, cssClass) {
  let error = document.createElement('div');
  error.className = `alert ${cssClass}`;
  error.appendChild(document.createTextNode(msg));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(error, form);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000)
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
  ui.validate(book);
  e.preventDefault()
});