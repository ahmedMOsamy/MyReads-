import React from "react";
import BookShelf from "./bookShelf";
import { Link } from "react-router-dom";

const Home =({books,switchShelf})=>{
    return (
<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfName = "Currently Reading" books={books} category="currentlyReading" switchShelf={switchShelf}/>
                <BookShelf shelfName = " Want to Read" books={books} category="wantToRead" switchShelf={switchShelf}/>
                <BookShelf shelfName = " Read" books={books} category="read" switchShelf={switchShelf}/>
              </div>
            </div>
            <div className="open-search">
            <Link to="/search" className="open-search-link" >
            Add a book
        </Link>
        </div>
          </div>
    )
}
export default Home