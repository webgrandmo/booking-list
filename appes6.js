class Book {

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBookToList(book) {

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

  validate(book) {
    if (book.title === '' || book.author === '' || book.isbn === '') {

      ui.showAlert('Please fill all inputs', 'error');

    } else {

      ui.addBookToList(book);
      ui.clearFields();
      ui.showAlert('Booking added successfuly', 'success');
    }
  }

  showAlert(msg, className) {
    let error = document.createElement('div');
    error.className = `alert ${className}`;
    error.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(error, form);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000)
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}


const ui = new UI();

//Add event listeners

document.getElementById('book-form').addEventListener('submit', function (e) {

  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  ui.validate(book);
  e.preventDefault()
});

document.getElementById('book-list').addEventListener('click', function (e) {
  ui.deleteBook(e.target);
  ui.showAlert('Booking removed successfuly', 'success');
  e.preventDefault();
})