import './Header.css';

export function Header(props){
  async function FormHandler(event){
    event.preventDefault();
    const request = event.target.elements.request.value;
    const subject = event.target.elements.subject.value;
    const orderBy = event.target.elements.orderBy.value;
    const startIndex = 0;
    const maxResults = 30;
    props.searchFunction(request, subject, orderBy, startIndex, maxResults);
  };

  return(
    <header>
      <h1>Search for books</h1>

      <form onSubmit={FormHandler}>
        <div>
          <input type="input" name="request" placeholder="Search" />
          <input type="submit" value="" />
        </div>

        <div>
          <nobr>
            <label htmlFor="subject">Category: </label>
            <select name="subject" id="">
              <option key="" value="" defaultValue>all</option>
              <option key="art" value="art">art</option>
              <option key="biography" value="biography">biography</option>
              <option key="computers" value="computers">computers</option>
              <option key="history" value="history">history</option>
              <option key="medical" value="medical">medical</option>
              <option key="poetry" value="poetry">poetry</option>
            </select> 
          </nobr>

          <nobr>
            <label htmlFor="orderBy">Sort option: </label>
            <select name="orderBy" id="">
              <option key="relevance" defaultValue="relevance">relevance</option>
              <option key="newest" value="newest">newest</option>
            </select>
          </nobr>
        </div>
      </form>
    </header>
  );
}
