import React from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends React.Component {

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.props.books.map(book =>
        <div onClick={()=>this.props.onclicker(book)}>
        <h1>{book.title}</h1>
        <img src={book.img}></img></div>
          )}</ul>
      </div>
    );
  }
}

export default BookList;
