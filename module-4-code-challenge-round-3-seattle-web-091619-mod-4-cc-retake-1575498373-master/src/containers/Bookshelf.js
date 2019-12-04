import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  componentDidMount(){
    let titleform = document.getElementById("title");
    let authorform = document.getElementById("author");
    let imageform = document.getElementById("image");
    let button = document.getElementById("button");
    button.onClick = this.addBook
  }

  addbook = e => {
    e.preventDefault()
    let titleform = document.getElementById("title");
    let authorform = document.getElementById("author");
    let imageform = document.getElementById("image");
    let book = {id: Math.random(), title: titleform.value, author: authorform.value, img: imageform.value}
    this.props.onclickerform(book)
  };
  render(){
  return (
    <div >
      <h1>Book Shelf</h1>
      <ul>{this.props.books.map(book =>
        <div   onClick={()=>this.props.onclicker(book)}>
        <h1>{book.title}</h1>
        <img src={book.img}></img></div>
          )}</ul>
          <form id="bookform">
         
         <input id="title" type="text" name="comment" placeholder="Title"/>
         <input id="author" type="text" name="comment" placeholder="Author"/>
         <input id="image" type="text" name="comment" placeholder="Image"/>
         <input onClick={this.addbook} id="button" type="submit" name="comment" placeholder="Submit"/>
       </form>
    </div>
  );
};
}

export default Bookshelf;
