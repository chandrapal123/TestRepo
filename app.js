const express = require('express');
const createError = require('http-errors');
const bodyparser=require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Route = require('./Routes/route');
app.use('/app', Route);
app.use(bodyparser.json());
//404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});
//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
