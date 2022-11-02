import React from "react";
import Book from "./book";
import propTypes from 'prop-types';

const SearchShelf = ({searchResult, switchShelf,searchLoad})=>{
return(
<div className="bookshelf">
        <h2 className="bookshelf-title">search results</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {searchLoad ? (searchResult.map((book)=>(
                    <Book key={book.id} books={book}
                     switchShelf={switchShelf}/>)))
                     : (searchResult)}
         </ol>
        </div>
      </div>
)
}
SearchShelf.propTypes = {
  searchResult:propTypes.array.isRequired,
  switchShelf :propTypes.func.isRequired,
  searchLoad: propTypes.bool.isRequired
}
export default SearchShelf