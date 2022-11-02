import React from "react";
import Book from "./book";

const BookShelf = ({shelfName,books,category, switchShelf})=>{
    const bookClass = books.filter((book)=>book.shelf ===category)

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookClass.map((book)=>(
            <Book key={book.id} books={book}
             switchShelf={switchShelf}/>))}
          </ol>
        </div>
      </div>
    )
}
export default BookShelf