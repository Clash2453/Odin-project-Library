const container = document.getElementById('container');
const input = document.getElementById('input-card');
const initialization = document.getElementById('initialize');
const addButton = document.getElementById('add-button');
const createButton = document.getElementById('createButton');
const mainTitle = document.getElementById('main-title');

function promptInput(){
    input.classList.remove('hidden');
    container.classList.remove('hidden');
    initialization.style.flexDirection = 'row';
    initialization.style.justifyContent = 'space-between'
}

function createLibrary(){
    input.classList.add('hidden');
    container.style.backgroundImage = 'url("../images/shelf.jpg")';
    mainTitle.textContent = 'Your Library'
}
