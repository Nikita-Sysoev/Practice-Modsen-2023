import "./BookInfo.css";

export function BookInfo({bookInfo}){
  return(
    <div className="book-info">
      <div className="book-cover-container">
        <img className="book-cover" src={bookInfo.imageLink} alt="Book image" />
      </div>

      <div className="book-info-container">
        <div className="category">{bookInfo.category}</div>
        <div className="name">{bookInfo.name}</div>
        <div className="author">{bookInfo.author}</div>
        <div className="description">{bookInfo.description}</div>
      </div>
    </div>
  );
}
