const express = require('express');
const router = require('./router');

const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

//requiring our router to be connected to app
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
