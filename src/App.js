import "./App.css";
import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import * as BooksAPI from "./BooksAPI"; 
import Search from "./search";

function App() {
    const [books, setbooks] = useState([]);
    const [searchResult, setsearchResult] = useState([]);
    const [searchLoad, setSearchLoad] = useState(true);

    useEffect (()=> {
         BooksAPI.getAll().then(book=>{setbooks(book)})
    },[])

    const switchShelf = async (book,shelf)=>{
      await BooksAPI.update(book,shelf);
      await BooksAPI.getAll().then(book=>{setbooks(book)})

    }


   const getBooks = async (search)=>{
    await BooksAPI.search(search).then((searchResult) => {
    if (searchResult && !searchResult.error) {
        setsearchResult( searchResult.map((b) => {
         books.forEach((book) => {
            if (b.id === book.id) 
            b.shelf = book.shelf
          })
      return b
        }),
        setSearchLoad (true))
    } else {
        setsearchResult( [`No books like your search`])
         setSearchLoad(false)
    }
  });}

 const resetSearch = () => {
   setsearchResult([]);
  };
    return (
        <Router>
  <div className="app">
        <Routes>
            <Route exact path='/search' 
            element={<Search getBooks={getBooks} 
            searchResult={searchResult}
              switchShelf={switchShelf}
               searchLoad={searchLoad}
                onResetSearch={resetSearch} />} />
            <Route exact path='/' 
            element={<Home books={books} 
            switchShelf={switchShelf}/>} />
        </Routes>
  </div>
        </Router>
    );
  }
  
  export default App;