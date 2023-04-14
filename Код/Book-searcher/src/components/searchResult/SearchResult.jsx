import './SearchResult.css';

import { BookCardsGrid } from '../bookCardsGrid/BookCardsGrid.jsx';

export function SearchResult(props) {
  return(
    <>
      <div className="results-count">Found {props.searchResult.totalItems} results</div>

      <BookCardsGrid bookInfoFunction={props.bookInfoFunction} books={props.searchResult.books} />
    </>
  );
}
