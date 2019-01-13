const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const socialRoutes = require('./social');
const postRoutes = require('./posts');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/social', socialRoutes);
router.use('/posts', postRoutes);

module.exports = router;