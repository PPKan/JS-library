let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function () {

        let read;
        if (hasRead) {
            read = "has read"
        } else {
            read = "not read yet"
        }

        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}.`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function everyInfo() {
    myLibrary.forEach(book => {
        console.log(book.info());
    });
}

// theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);


const form = document.querySelector(".form")
const newBook = document.querySelector(".new-book")
const submit = document.querySelector(".submit")

newBook.addEventListener('click', function() {
    form.style = "display:flex; flex-direction: column;"
});

submit.addEventListener('click', function() {
    const author = document.querySelector(".author");
    const title = document.querySelector(".title");
    const pages = document.querySelector(".pages");
    const read = document.querySelector(".read");
    console.log(author.value, title.value, pages.value, read.checked);
    let book = new Book(author.value, title.value, pages.value, read.checked);
    addBookToLibrary(book);
    everyInfo();
});