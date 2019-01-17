const router = require('express').Router();

const UserController = require('../../controllers/User');

router.post(
  '/follow/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.follow(
      req.user._id,
      req.params.id,
      result => res.json(result)
    );
  }
);

router.post(
  '/unfollow/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.unfollow(
      req.user._id,
      req.params.id,
      result => res.json(result)
    );
  }
);

module.exports = router;