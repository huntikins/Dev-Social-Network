const router = require('express').Router();

const getEvents = require('../../services/meetup').getEvents;

router.get(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    getEvents(
      req.user.zipCode,
      (result, err) => (
        err ?
        res.status(err.status || 500).json({ message: err.message }) :
        res.json(result)
      )
    );
  }
);

module.exports = router;
