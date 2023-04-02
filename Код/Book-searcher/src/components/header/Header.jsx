import './Header.css';

export function Header(props){
  return(
    <header>
      <h1>Search for books</h1>

      <form onSubmit={props.serachFunction}>
        <div>
          <input type="input" name="request" placeholder="Search" />
          <input type="submit" value="" />
        </div>

        <div>
          <nobr>
            <label for="subject">Category: </label>
            <select name="subject" id="">
              <option key="" value="" selected>all</option>
              <option key="art" value="art">art</option>
              <option key="biography" value="biography">biography</option>
              <option key="computers" value="computers">computers</option>
              <option key="history" value="history">history</option>
              <option key="medical" value="medical">medical</option>
              <option key="poetry" value="poetry">poetry</option>
            </select> 
          </nobr>

          <nobr>
            <label for="orderBy">Sort option: </label>
            <select name="orderBy" id="">
              <option key="relevance" value="relevance" selected>relevance</option>
              <option key="newest" value="newest">newest</option>
            </select>
          </nobr>
        </div>
      </form>
    </header>
  );
}
