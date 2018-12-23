import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dontenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';

dontenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose
  .connect(
    process.env.MONGODB,
    { useNewUrlParser: true }
  )
  .then(console.log('Connection to DB established Captain! o/'));

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => console.log("Runin' on 5000 Captain! o/"));
