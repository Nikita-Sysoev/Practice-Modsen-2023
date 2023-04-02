import './Main.css';

import { BookSearchResult } from '../bookSearchResult/BookSearchResult.jsx';
import { BookInfo } from '../bookInfo/BookInfo.jsx';

export function Main() {
  return(
    <main>
      {true ? <BookSearchResult /> : <BookInfo />}
    </main>
  );
}