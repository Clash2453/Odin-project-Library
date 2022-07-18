const container = document.getElementById('container');
const input = document.getElementById('input-card');
const initialization = document.getElementById('initialize');
const addButton = document.getElementById('add-button');
const createButton = document.getElementById('createButton');

function promptInput(){
    input.classList.remove('hidden');
    container.classList.remove('hidden');
    // while(initialization.firstChild){
    //     initialization.removeChild(initialization.firstChild);
    // }
    initialization.style.flexDirection = 'row';
    initialization.style.justifyContent = 'space-between'

}

function createLibrary(){
    input.classList.add('hidden');
    container.style.backgroundImage = 'url("../images/shelf.jpg")';
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'Your Library'
    initialization.appendChild(mainTitle)
}
