import './BookCardsGrid.css';

import { BookCard } from 'components/bookCard/BookCard.jsx';

export function BookCardsGrid({books, bookInfoFunction}) {
  const bookCards = (books || []).map((book) => <BookCard key={book.id} bookInfoFunction={bookInfoFunction} id={book.id} category={book.category} name={book.name} author={book.author} imageLink={book.imageLink} />);
  
  return(
    <div className="bookCardsGrid">
      {bookCards}
    </div>
  );
}
