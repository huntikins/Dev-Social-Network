const router = require('express').Router();

const UserController = require('../../controllers/User');

router.get(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => res.json(req.user)
);

router.get(
  '/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.findById(
      req.params.id,
      (err, user) => res.json(user)
    );
  }
);

router.delete(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.delete(
      req.user._id,
      result => res.json(result)
    );
  }
);

router.put(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.update(
      req.user._id,
      req.body,
      result => res.json(result)
    );
  }
);

module.exports = router;