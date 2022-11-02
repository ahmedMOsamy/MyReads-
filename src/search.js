import React from "react";
import { Link } from "react-router-dom";
import SearchShelf from "./searchShelf"
import propTypes from 'prop-types';
import { useState } from "react";


const Search =({getBooks,onResetSearch,searchResult, switchShelf,searchLoad})=>{
  const [search, setSearch] = useState("");
  const handleSearch = (search)=>{
    setSearch(search.trim());

    getBooks(search)
  }
  return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={onResetSearch}>Close</Link>
          <div className="search-books-input-wrapper">
            <input className="books-search" type="text" value={search}
              placeholder="Search by title, author" 
              onChange={(e)=>handleSearch(e.target.value)}/>
          </div>
        </div>
        <SearchShelf searchResult={searchResult}
          switchShelf={switchShelf} searchLoad={searchLoad} /> 
      </div>
    )
}
Search.propTypes = {
  searchResult:propTypes.array.isRequired,
  switchShelf :propTypes.func.isRequired, 
  onResetSearch :propTypes.func.isRequired, 
  searchLoad: propTypes.bool.isRequired
}
export default Search