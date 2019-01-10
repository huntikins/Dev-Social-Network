const router = require('express').Router();

const UserController = require('../../controllers/User');
const passport = require('../../config/server').passport;

router.get('/', (req, res) => {
  res.end("test")
});

router.post('/create', (req, res) => {
  UserController.create(req.body, result => res.json(result));
});

router.post(
  '/login',
  passport.authenticate(
    'local',
    { failureRedirect: '/api/authentication/fail', failureFlash: true }
  ),
  (req, res) => res.json({ success: true, message: 'Successful authentication.' })
);

router.post('/logout');

router.get('/fail', (req, res) => {
  let response = { success: false };
  if (req.flash().error) response.message = req.flash().error[0];
  res.json(response);
});

module.exports = router;