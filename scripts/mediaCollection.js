window.onload = function() {

let bookData = [
    {"title": "The Lost Metal", "author": "Brandon Sanderson", "year": 2022, "image": "../images/LostMetalCover.jpg"}, 
    {"title": "Yumi and the Nightmare Painter", "author": "Brandon Sanderson", "year": 2023, "image": "../images/YumiPainterCover.jpg"}, 
    {"title": "Wind and Truth", "author": "Brandon Sanderson", "year": 2024, "image": "../images/WindTruthCover.jpg"}
];

class Book {
    #title;
    #author;
    #year;
    #image;

    constructor(bookIndex) {
        this.#title = bookData[bookIndex].title;
        this.#author = bookData[bookIndex].author;
        this.#year = bookData[bookIndex].year;
        this.#image = bookData[bookIndex].image;
    }

    toString() {
        return ("Title: " + this.#title + ", " + "Author: " + this.#author + ", " + "Year: " + this.#year + ", " + "image: " + this.#image);
    }

    displayBooks() {
        let image = document.createElement('img');
        image.id = this.#image;
        image.src = this.#image;
        image.innerHTML = this.#title + " image";

        let title = document.createElement("p");
        title.id = this.#title;
        title.innerHTML = "Book Title: " + this.#title;
    
        let author = document.createElement('p');
        author.id = this.#author;
        author.innerHTML = "Author: " + this.#author;

        let year = document.createElement('p');
        year.id = this.#year;
        year.innerHTML = "Publication Year: " + this.#year;

        document.getElementById('bookList').appendChild(image);
        document.getElementById('bookList').appendChild(title);
        document.getElementById('bookList').appendChild(author);
        document.getElementById('bookList').appendChild(year);
        document.getElementById('bookList').appendChild(document.createElement('br'));
    }

}

console.log(bookData[0].title);

mistborn = new Book(0);
yumiPainter = new Book(1);
windTruth = new Book(2);

console.log(mistborn);
console.log(mistborn.toString());

mistborn.displayBooks();
yumiPainter.displayBooks();
windTruth.displayBooks();



}