import './Main.css';

import { SearchResult } from '../searchResult/SearchResult';
import { BookInfo } from '../bookInfo/BookInfo.jsx';

export function Main(props) {
  return(
    <main>
      {props.searchResult && <SearchResult bookInfoFunction={props.bookInfoFunction} searchResult={props.searchResult} />}
      {props.bookInfo && <BookInfo bookInfo={props.bookInfo} />}
    </main>
  );
}
