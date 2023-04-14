import './BookCardsGrid.css';

import { BookCard } from '../bookCard/BookCard.jsx';

export function BookCardsGrid(props) {
  const bookCards = (props.books || []).map((book) => <BookCard key={book.id} bookInfoFunction={props.bookInfoFunction} id={book.id} category={book.category} name={book.name} author={book.author} imageLink={book.imageLink} />);
  
  return(
    <div className="bookCardsGrid">
      {bookCards}
    </div>
  );
}
