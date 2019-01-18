const router = require('express').Router();

const UserController = require('../controllers/User');

const path = require('path');

router.get('/:token', (req, res) => {
  UserController.checkResetToken(
    req.params.token,
    result => {
      if (!result) return res.sendFile(path.join(__dirname, '../views/invalid-token.html'));
      res.sendFile(path.join(__dirname, '../views/password-reset.html'));
    }
  );
});

router.post('/:token', (req, res) => {
  console.log(req.body);
});

module.exports = router;