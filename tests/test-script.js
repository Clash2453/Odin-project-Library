
class Book{
    constructor(author, title, pages, read, notes){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.notes = notes;
    }
}

function createBook(author, title, pages, read, notes){
    return new Book(author, title, pages, read, notes);
}

module.export(createBook)