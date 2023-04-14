import "./BookInfo.css";

export function BookInfo(props){
  return(
    <div className="book-info">
      <div className="book-cover-container">
        <img className="book-cover" src={props.bookInfo.imageLink} alt="Book image" />
      </div>

      <div className="book-info-container">
        <div className="category">{props.bookInfo.category}</div>
        <div className="name">{props.bookInfo.name}</div>
        <div className="author">{props.bookInfo.author}</div>
        <div className="description">{props.bookInfo.description}</div>
      </div>
    </div>
  );
}
