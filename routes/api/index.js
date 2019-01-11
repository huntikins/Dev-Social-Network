const router = require('express').Router();

const authRoutes = require('./auth');
const postRoutes = require('./posts');

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);

module.exports = router;