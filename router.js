const router = require('express').Router();
router.use('/expressions', require('./routes/expressions').expressionsRouter);
router.use('/animals', require('./routes/animals').animalsRouter);

module.exports=router;
