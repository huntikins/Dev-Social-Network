const router = require('express').Router();

const kbController = require('../../controllers').KBItem;

router.post(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    kbController.create(
      req.user._id,
      req.body,
      result => res.json(result)
    );
  }
);

module.exports = router;