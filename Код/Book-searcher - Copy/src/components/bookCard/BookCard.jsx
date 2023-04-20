import './BookCard.css';

export function BookCard({id, imageLink, category, name, author, bookInfoFunction}){
  const lol = () => bookInfoFunction(id);
  
  return(
    <div className="book-card" onClick={lol}>
      <img src={imageLink} alt="Book image" />
      <div className="info-container">
        <span className="category">{category}</span>
        <span className="name">{name}</span>
        <span className="author">{author}</span>
      </div>
    </div>
  );
}
