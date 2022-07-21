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
    const books = [...document.getElementsByClassName('bookCover')];
    books.forEach(book => book.classList.add('hidden'))
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

    if(createBook() === 1){
        window.addEventListener('mouseup', function(e){
            if (e.target !=input && e.target.parentNode != input && !input.contains(e.target)){
                input.classList.add('hidden');
                createButton.classList.remove('hidden')
            }
        });
        this.addEventListener('click', createBook);
        input.classList.remove('hidden');
        createButton.classList.remove('hidden');
        input.classList.add('hidden');
        mainTitle.textContent = 'Your Library';
        this.removeEventListener('click', createLibrary);
    }
}

//creates the book object calls addCover()

function createBook(){
    const books = [...document.getElementsByClassName('bookCover')];
    books.forEach(book => book.classList.remove('hidden'))

    const author = document.getElementById('author')
    const title = document.getElementById('title')
    const pages = document.getElementById('pages')
    const read = document.getElementById('read')
    const notes = document.getElementById('notes')

    const validation = validateInput([author.value, title.value, pages.value, read.value]);

    if(validation === 0){
        alert('Cannot have empty input other than notes.');
        return;
    }
    else if(validation === 1){
        alert('Input is too long. It needs to be between 1 and 20 characters.');
        return;
    }
    else{
        const myBook = new Book(author.value, title.value, pages.value, read.value, notes.value);
        myBooks.push(myBook);
        addCover();
    
        author.value = '';
        title.value = '';
        pages.value = '';
        read.value = '';
        notes.value = '';

        input.classList.add('hidden');
        createButton.classList.remove('hidden');
        return 1;
    }

}

//Creates the book cover and adds it to the container
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
    container.style.justifyContent = 'center';

    const books = [...document.getElementsByClassName('bookCover')];
    books.forEach(book => book.classList.add('hidden'))

    title.textContent = `Title: ${thisBook.title}`;
    author.textContent = `Author: ${thisBook.author}`;
    pages.textContent = `Pages: ${thisBook.pages}`;
    read.textContent = `Status: ${thisBook.read}`;
    notes.textContent = `${thisBook.notes}`;  
    
    infoCard.classList.remove('hidden');
}

function closeInfo(){
    title.textContent = '';
    author.textContent = '';
    pages.textContent = '';
    read.textContent = '';
    notes.textContent = '';  
    infoCard.classList.add('hidden')

    const books = [...document.getElementsByClassName('bookCover')];
    books.forEach(book => book.classList.remove('hidden'))
}

function validateInput(arr){
    let result = 2;
    arr.forEach(element => {
        if(element.length === 0)
            result = 0;
        if( element.length > 20)
           result = 1;
    });
    return result;
}
