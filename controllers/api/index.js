const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
