import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: '1984',
        authors: 'Orwell',
        covers: [
          'https://images.gr-assets.com/books/1532714506l/40961427.jpg',
          'https://images.gr-assets.com/books/15046119571/9577857.jpg'
        ],
        pages: 198
      },
      {
        goodreadsId: 2,
        title: 'Three Men in a Boat',
        authors: 'Jerome K. Jerome',
        covers: [
          'https://images.gr-assets.com/books/1392791656l/4921.jpg',
          'https://images.gr-assets.com/books/13120368781/627830.jpg'
        ],
        pages: 256
      }
    ]
  });
});

export default router;
