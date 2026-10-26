const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoute = require('./route/book.route.js');
const userRoute = require('./route/user.route.js');
const { Book, defaultBooks } = require('./model/book.model.js');

const app = express();
dotenv.config();

const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const port = process.env.PORT || 4001;
const mongoURI = process.env.MONGODB_URI || process.env.mongoDBURI;

app.use('/book', bookRoute);
app.use('/user', userRoute);

app.get('/health', (req, res) => {
  const databaseReady = mongoose.connection.readyState === 1;
  res.status(databaseReady ? 200 : 503).json({ status: databaseReady ? 'ok' : 'unavailable' });
});

const startServer = async () => {
  try {
    if (!mongoURI) {
      throw new Error('MONGODB_URI is required');
    }
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is required');
    }
    if (process.env.NODE_ENV === 'production' && !process.env.CLIENT_ORIGIN) {
      throw new Error('CLIENT_ORIGIN is required in production');
    }

    await mongoose.connect(mongoURI);
    console.log('connected to mongo db');

    await Book.bulkWrite(defaultBooks.map((book) => ({
      updateOne: {
        filter: { title: book.title },
        update: {
          $set: book,
          $setOnInsert: { featured: false }
        },
        upsert: true
      }
    })));
    console.log('Default book catalog synchronized with database');

    app.listen(port, () => {
      console.log(`server listening at ${port}`);
    });
  } catch (err) {
    console.error('Server startup failed:', err.message);
    process.exitCode = 1;
  }
};

startServer();