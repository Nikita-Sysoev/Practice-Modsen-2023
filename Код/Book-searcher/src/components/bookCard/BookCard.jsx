import './BookCard.css';

export function BookCard(props){
  return(
    <div class="book-card">
      <img src="" alt="Book image" />
      <div class="category">{props.category}</div>
      <div class="name">{props.name}</div>
      <div class="author">{props.author}</div>
    </div>
  );
}
