//Elements used 

const container = document.getElementById('container');
const input = document.getElementById('input-card');
const initialization = document.getElementById('initialize');
const addButton = document.getElementById('add-button');
const createButton = document.getElementById('createButton');
const mainTitle = document.getElementById('main-title');
let myBooks = [];

addButton.addEventListener('click', createLibrary)

//The book class

class Book{
    constructor(author, title, pages, read, notes){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.notes = notes;
    }
}

//Controls the visibility of the input form

function promptInput(){
    createButton.classList.add('hidden');
    input.classList.remove('hidden');
    container.classList.remove('hidden');
    initialization.style.flexDirection = 'row';
    initialization.style.justifyContent = 'space-between'
    createButton.textContent = 'Add new book'
    initialization.style.height = '20vh'
}

//the initial setup for the library subscribes the button for createBook after the first press

function createLibrary(){
    input.classList.add('hidden');
    mainTitle.textContent = 'Your Library';
    this.removeEventListener('click', createLibrary);
    createBook();
    this.addEventListener('click', createBook);
}

//creates the book object calls addCover()

function createBook(){
    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    const notes = document.getElementById('notes').value

    const myBook = new Book(author, title, pages, read, notes);
    myBooks.push(myBook);
    addCover();
    input.classList.add('hidden');
    createButton.classList.remove('hidden')
}

//Creates the bookcover and adds it to the container
//makes the container temporarily flex row to fit the covers
function  addCover(){
    const bookCover = document.createElement('div')
    bookCover.classList.add('bookCover');
    container.classList.add('shelfActive');
    bookCover.value = myBooks.length - 1;
    bookCover.textContent = myBooks[bookCover.value].title;
    container.appendChild(bookCover);
}