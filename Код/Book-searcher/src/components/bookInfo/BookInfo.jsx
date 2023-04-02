import "./BookInfo.css";

export function BookInfo(){
  return(
    <div class="book-info">
      <div class="book-cover-container">
        <img class="book-cover" src="" alt="Book image" />
      </div>

      <div class="book-info-container">
        <div class="category">Category/...</div>
        <div class="name">Name</div>
        <div class="author">Author</div>
        <div class="description">Description</div>
      </div>
    </div>
  );
}
