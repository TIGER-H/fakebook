require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./users');
const authRoute = require('./auth');
const postRoute = require('./posts');

const url = process.env.MONGO_URL;

console.log(`connecting to ${url}`); // insecure
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log(`connected to MongoDB`);
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
