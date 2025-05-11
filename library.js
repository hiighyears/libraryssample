const myLibrary = [];

function Book(title,author,pages,read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
    this.id = crypto.randomUUID();

}

function addBookToLibrary(title,author,pages,read_status) {
const book = new Book(title,author,pages,read_status)
myLibrary.push(book);
}

function displayBookslog(books){
    books.forEach(element => {
        console.log({element})
    });

}


addBookToLibrary("Moby Dick", "Herman Melville", 635, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, true);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
addBookToLibrary("Jane Eyre", "Charlotte Brontë", 500, true);
addBookToLibrary("The Chronicles of Narnia", "C.S. Lewis", 767, false);
addBookToLibrary("Frankenstein", "Mary Shelley", 280, true);
// displayBookslog(myLibrary);
displayBooks(myLibrary);



function displayBooks(books) {
  const container = document.querySelector(".cards_container");
  container.innerHTML = ""; 

  books.forEach(book => {

    const card = document.createElement("div");
    card.classList.add("book_card");


    const title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;
    card.appendChild(title);


    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);


    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    card.appendChild(pages);

    const read_status = document.createElement("button")
    read_status.textContent = `${book.read_status}`;
    read_status.addEventListener("click", () => {
    change_status(book, read_status)});
    card.appendChild(read_status);

    const delete_book= document.createElement("button");
    delete_book.textContent="DELETE";
    delete_book.addEventListener("click",() => {delete_book_from_library(book)} );
    delete_book.classList.add("delete_button");
    card.appendChild(delete_book);

    container.appendChild(card);
  });
}

function change_status(book,read_status){
    book.read_status = !book.read_status;
    read_status.textContent = `${book.read_status}`;

}

function delete_book_from_library(book) {
  const index = myLibrary.findIndex(b => b.id === book.id);
  if (index !== -1) {
    myLibrary.splice(index, 1); 
    displayBooks(myLibrary);  
  }
}

displayBooks(myLibrary);
