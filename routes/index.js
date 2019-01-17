const router = require('express').Router();

const apiRoutes = require('./api');
const passwordResetRoutes = require('./passwordreset');

router.use('/api', apiRoutes);
router.use('/passwordreset', passwordResetRoutes);

module.exports = router;