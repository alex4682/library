const booksList = document.querySelector("#books_list");
export const books = [
    {
        image: "&quot;game-of-thrones.b4d417b9.jpeg&quot",
        bookName: "Game of Thrones",
        author: "Jorge R. R Martin",
        year: 1996,
        rating: 4.4,
    },
    {
        image: "&quot;harry-potter.2b18bf2e.jpeg&quot",
        bookName: "Harry Potter and philosopher's stone",
        author: "J. K. Rowling",
        year: 1997,
        rating: 4.5,
    },
    {
        image: "&quot;lord-of-the-rings.e24c3c67.jpeg&quot",
        bookName: "Lord of the rings",
        author: "J. R. R. Tolkien",
        year: 1967,
        rating: 4.5,
    },
    {
        image: "&quot;hobbit.cac4f096.jpeg&quot",
        bookName: "The Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        rating: 4.3,
    },
    {
        image: "&quot;at-the-west-front.b2d1c9ce.jpg&quot",
        bookName: "Nothing new on the east front",
        author: "Erich Maria Remarque",
        year: 1929,
        rating: 4.5,
    },
    {
        image: "&quot;fahrenheit-451.a4f69e9b.jpg&quot",
        bookName: "Fahrenheit 451",
        author: "Ray Bradbury",
        year: 1953,
        rating: 4.7,
    },
    {
        image: "&quot;little-prince.8d1addbb.jpg&quot",
        bookName: "The little prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        rating: 4.9,
    },
    {
        image: "&quot;narnia.7a4db71f.jpg&quot",
        bookName: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        year: 1950,
        rating: 4.3,
    },
    {
        image: "&quot;harry-potter-2.57f49c7d.jpg&quot",
        bookName: "Harry Potter and the Chamber of Secrets",
        author: "J.K Rawling",
        year: 1998,
        rating: 4.4,
    },
];

const newBooks = [];
books.forEach(book => {
    newBooks.push(`
        <li style="background-image: url(${book.image});" class="books_item">
            <div class="books_list_wrap">
                <p class="books_list_rating_text">${book.rating}</p> 
                <svg width="23" height="23" class="books_rating_img">
      <use
        href="/symbol-defs.a8b2e413.svg#icon-star"
        width="24"
        height="24"
      ></use>
    </svg>


            </div> 
            <div class="books_text_wrap">
                <p class="books_name">${book.bookName}</p>
                <p class="books_author">${book.author}</p>
                <p class="books_year">${book.year}</p>
            </div>
        </li>`);
});

booksList.innerHTML = newBooks.join("");
