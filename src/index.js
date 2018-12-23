import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import auth from './routes/auth';

const app = express();
app.use(bodyParser.json());
mongoose
  .connect(
    'mongodb+srv://Simas:02894145@baltic-react-mongodb-one-l0d3u.mongodb.net/bookaroo?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(console.log('Connection to DB established Captain! o/'));

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => console.log('Runin on 5000 Captain! o/'));
