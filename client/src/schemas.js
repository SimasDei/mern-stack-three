import { schema } from 'normalizr';

export const bookSchema = new schema.Entity(
  'books',
  {},
  { idAttribute: '_id' }
);

export const eslint = 'leave me alone eslint';
