import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor(){
  super()
  this.state = {
    books: [],
    bookshelf: [],
  }
}

// persist(books){
//   fetch(`http://localhost:3000/books`, {
//     method: "PATCH", 
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//     },
//     body: JSON.stringify({
//       books: this.state.books,
//       bookshelf: this.state.bookshelf
//     })
// })
// .then(resp => resp.json())
// .then(json => console.log(json))
// }

// ^ nonfunctional? ^



componentDidMount(){
  fetch('http://localhost:3000/books')
  .then(response => {
  console.log(response)
    return response.json()
  })
  .then(data => {
    console.log(data)
    this.setState({books: data})
  console.log(this.props)
  })
}
onclicker = (book) => {
  let holder = [...this.state.bookshelf]
  if(holder.includes(book)==false){
    holder.push(book)
  }
  this.setState({bookshelf: holder})
}
onclickershelf = (book) => {
  let holder = [...this.state.bookshelf]
  let index = holder.indexOf(book)
  holder.splice(index, 1)
  this.setState({bookshelf: holder})
//  this.persist(this.state.bookshelf)
 // this.persist(this.state.books)
}
onclickershelfform = (book) => {
  let holder = [...this.state.bookshelf]
  if(holder.includes(book)==false){
    holder.push(book)
  }
  this.setState({bookshelf: holder})
}
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} onclicker={this.onclicker}  />
        <Bookshelf  books={this.state.bookshelf} onclicker={this.onclickershelf} onclickerform={this.onclickershelfform} />
      </div>
    );
  }
}

export default App;
