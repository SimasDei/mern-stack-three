import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBookCall from '../calls/AddBookCall';
import { fetchBooks } from '../../actions/books';
import { Card, Icon, Image, Header } from 'semantic-ui-react';

class DashboardPage extends Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchBooks();

  bookCard = book => (
    /* eslint-disable */
    <Card centered key={book._id}>
      <Image src={book.cover} size="small" centered bordered rounded />
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          <span className="author">{book.author}</span>
        </Card.Meta>
        <Card.Description>Author: {book.authors}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="book" />
          Pages: {book.pages}
        </a>
      </Card.Content>
    </Card>
    /* eslint-enable */
  );

  render() {
    const { isConfirmed, books } = this.props;

    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}

        <Header size="large" color="blue" textAlign="center">
          <Icon name="book" />
          Your Library
        </Header>

        {isConfirmed && (
          <Card.Group>{books.map(book => this.bookCard(book))}</Card.Group>
        )}

        {isConfirmed && <AddBookCall />}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  fetchBooks: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchBooks }
)(DashboardPage);
