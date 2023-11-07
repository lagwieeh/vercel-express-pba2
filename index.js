const express = require('express');
// const router = require('./router');
const animalsRouter = require('./routes/animals').animalsRouter;
const expressionsRouter = require('./routes/expressions').expressionsRouter;

const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

//requiring our router to be connected to app
// app.use(router);
app.use('/expressions', expressionsRouter);
app.use('/animals', animalsRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
