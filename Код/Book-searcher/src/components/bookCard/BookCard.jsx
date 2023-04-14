import './BookCard.css';

export function BookCard(props){
  const lol = () => props.bookInfoFunction(props.id);
  
  return(
    <div className="book-card" onClick={lol}>
      <img src={props.imageLink} alt="Book image" />
      <div className="info-container">
        <span className="category">{props.category}</span>
        <span className="name">{props.name}</span>
        <span className="author">{props.author}</span>
      </div>
    </div>
  );
}
