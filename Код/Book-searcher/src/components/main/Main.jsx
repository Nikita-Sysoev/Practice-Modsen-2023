import './Main.css';

import { SearchResult } from 'components/searchResult/SearchResult';
import { BookInfo } from 'components/bookInfo/BookInfo.jsx';

export function Main(props) {
  return(
    <main>
      {props.searchResult && <SearchResult bookInfoFunction={props.bookInfoFunction} searchResult={props.searchResult} />}
      {props.bookInfo && <BookInfo bookInfo={props.bookInfo} />}
    </main>
  );
}
