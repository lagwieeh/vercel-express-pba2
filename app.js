
const express = require('express');
const app = express();
// ROUTERS
const {expressionsRouter} = require('./routes/expressions');
const {animalsRouter} = require('./routes/animals');



// console.log(expressionsRouter)
// console.log(animalsRouter)
const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));
app.use('/expressions', expressionsRouter);
app.use('/animals', animalsRouter)

// EXPRESSIONS
  // Get a single expression
  // Update an expression
  // Create an expression
  // Delete an expression
// ANIMALS
  // Get all animals
  // Get a single animal
  // Create an animal
  // Update an animal
  // Delete a single animal

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});