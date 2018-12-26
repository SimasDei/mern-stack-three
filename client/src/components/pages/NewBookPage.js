import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';

class NewBookPage extends Component {
  state = {
    book: null
  };

  onBookSelect = book => this.setState({ book });

  addBook = () => {
    console.log('Ahoy there Sailor o/');
  };

  render() {
    return (
      <Segment>
        <h1>Add New Book</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />

        {this.state.book && (
          <BookForm submit={this.addBook} book={this.state.book} />
        )}
      </Segment>
    );
  }
}

export default NewBookPage;
