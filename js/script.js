const container = document.getElementById('container');
const input = document.getElementById('input-card');
const initialization = document.getElementById('initialize');
const addButton = document.getElementById('add-button');
const createButton = document.getElementById('createButton');
const mainTitle = document.getElementById('main-title');
let myBooks = [];

addButton.addEventListener('click', createLibrary)

class Book{
    constructor(author, title, pages, read, notes){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.notes = notes;
    }
}
function promptInput(){
    createButton.classList.add('hidden');
    input.classList.remove('hidden');
    container.classList.remove('hidden');
    initialization.style.flexDirection = 'row';
    initialization.style.justifyContent = 'space-between'
}

function createLibrary(){
    input.classList.add('hidden');
    container.style.backgroundImage = 'url("../images/shelf.jpg")';
    mainTitle.textContent = 'Your Library';
    this.removeEventListener();
    this.addEventListener('click', createBook);
}

function createBook(){
    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    const notes = document.getElementById('notes').value

    const myBook = new Book(author, title, pages, read, notes);
    myBooks.push(myBook);
    input.classList.add('hidden');
    createButton.classList.remove('hidden')
}
