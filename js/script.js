//Elements used 

const container = document.getElementById('container');
const input = document.getElementById('input-card');
const initialization = document.getElementById('initialize');
const addButton = document.getElementById('add-button');
const createButton = document.getElementById('createButton');
const closeButton = document.getElementById('close-button');
const mainTitle = document.getElementById('main-title');

const notes = document.getElementById('info-notes');
const read = document.getElementById('info-read');
const pages = document.getElementById('info-pages');
const author = document.getElementById('info-author');
const title = document.getElementById('info-title');
const infoCard = document.getElementById('info-card');

let myBooks = [];

closeButton.addEventListener('click', closeInfo);
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
    const author = document.getElementById('author')
    const title = document.getElementById('title')
    const pages = document.getElementById('pages')
    const read = document.getElementById('read')
    const notes = document.getElementById('notes')

    const myBook = new Book(author.value, title.value, pages.value, read.value, notes.value);
    myBooks.push(myBook);
    addCover();

    input.classList.add('hidden');
    createButton.classList.remove('hidden')

    author.textContent = '';
    title.textContent = '';
    pages.textContent = '';
    read.textContent = '';
    notes.textContent = '';
}

//Creates the bookcover and adds it to the container
//makes the container temporarily flex row to fit the covers
function  addCover(){
    const bookCover = document.createElement('div')
    bookCover.classList.add('bookCover');
    container.classList.add('shelf-active');
    bookCover.value = myBooks.length - 1;
    bookCover.textContent = myBooks[bookCover.value].title;
    bookCover.addEventListener('click', showInfo);
    container.appendChild(bookCover);
}

function showInfo(){
    const thisBook = myBooks[this.value]

    title.textContent = thisBook.title;
    author.textContent = thisBook.author;
    pages.textContent = thisBook.pages;
    read.textContent = thisBook.read;
    notes.textContent = thisBook.notes;  
    
    infoCard.classList.remove('hidden');
}

function closeInfo(){
    title.textContent = '';
    author.textContent = '';
    pages.textContent = '';
    read.textContent = '';
    notes.textContent = '';  
    infoCard.classList.add('hidden')
}