const router = require('express').Router();

const UserController = require('../../controllers/User');
const passport = require('../../config/server').passport;

router.get(
  '/test',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    res.json({
      success: true,
      message: 'You are authenticated.'
    });
  }
);

router.post('/create', (req, res) => {
  UserController.create(req.body, result => {
    if (result.success) {
      req.login(result.user, err => err ? res.json(err) : res.json({ success: true, message: 'Successful authentication.' }));
    }
    else res.json(result);
  });
});

router.post(
  '/login',
  passport.authenticate(
    'local',
    { failureRedirect: '/api/auth/fail', failureFlash: true }
  ),
  (req, res) => res.json({ success: true, message: 'Successful authentication.' })
);

router.post(
  '/logout',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    req.logout();
    res.json({
      success: true,
      message: 'Account logout was successful.'
    });
  }
);

router.get('/fail', (req, res) => {
  let response = { success: false };
  const message = req.flash();
  response.message = message.error ? message.error[0] : 'You are not authenticated.';
  res.json(response);
});

module.exports = router;