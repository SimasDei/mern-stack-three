import { createSelector } from 'reselect';
import { BOOKS_FETCHED } from '../types';

export default function books(state = {}, action = {}) {
  switch (action.type) {
    case BOOKS_FETCHED:
      return { ...state, ...action.entities.books };
    default:
      return state;
  }
}

// SELECTORS
export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.values(booksHash)
);
