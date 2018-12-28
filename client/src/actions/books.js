import { normalize } from 'normalizr';
import { BOOKS_FETCHED } from '../types';
import api from '../api';
import { bookSchema } from '../schemas';

const booksFetched = data => ({
  type: BOOKS_FETCHED,
  data
});

export const fetchBooks = () => dispatch =>
  api.books
    .fetchAll()
    .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));

export const leaveMeAlone = '';
