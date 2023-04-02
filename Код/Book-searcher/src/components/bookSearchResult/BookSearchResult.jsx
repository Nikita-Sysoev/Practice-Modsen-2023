import "./BookSearchResult.css";

import { BookCard } from '../bookCard/BookCard.jsx';

export function BookSearchResult() {
  const books = [];
  for(let i = 0; i < 30; i++){
    books.push(<BookCard key={i} category="Category" name="Name" author="Author" />);
  }
  
  return(
    <>
      <div class="results-count">Found {books.length} results</div>
    
      <div class="books-container">
        {books}
      </div>
    </>
  );
}
