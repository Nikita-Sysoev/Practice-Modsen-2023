import React, { useState } from 'react';
import './App.css';

import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import GoogleBookAPIGet from './GoogleBookAPI.js'

export default function App(){
  const [header, setHeader] = useState(
    {
      searchFunction: Search,
    }
  );
  const [main, setMain] = useState(
    {}
  );

  async function Search(request, subject, orderBy, startIndex, maxResults){
    const data = await GoogleBookAPIGet(request, subject, orderBy, startIndex, maxResults);
    console.log(data);
    const totalItems = !!data.totalItems && data.totalItems;
    const books = data.items.map(({id, volumeInfo}) => ({
      id: id,
      name: (!!volumeInfo.title || '') && volumeInfo.title,
      author: (!!volumeInfo.authors || '') && volumeInfo.authors[0],
      category: (!!volumeInfo.categories || '') && volumeInfo.categories[0],
      description: (!!volumeInfo.description || '') && volumeInfo.description,
      imageLink: (!!volumeInfo.imageLinks || '') && !!volumeInfo.imageLinks.thumbnail && volumeInfo.imageLinks.thumbnail,
    }));
    
    await setMain({
      searchResult:{
        totalItems,
        books,
      }
    });
  }

  function bookInfo(bookId){
    const book = main.searchResult.books.find(book => book.id === bookId);

    setMain({
      bookInfo:{
        name: book.name,
        author: book.author,
        category: book.category,
        description: book.description,
        imageLink: book.imageLink,
      }
    });
  }
  
  return (
    <>
      <Header searchFunction={header.searchFunction} />
      <Main searchResult={main.searchResult} bookInfoFunction={bookInfo} bookInfo={main.bookInfo} />
    </>
  );
}
