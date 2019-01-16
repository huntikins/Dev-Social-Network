const router = require('express').Router();

const getEvents = require('../../services/meetup').getEvents;

router.get(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    getEvents(
      req.user.zipCode,
      result => res.json(result)
    );
  }
);

module.exports = router;