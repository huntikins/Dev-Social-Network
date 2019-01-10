const router = require('express').Router();

const UserController = require('../../controllers/User');

router.get('/', (req, res) => {
  res.end("test")
});

router.post('/user', (req, res) => {
  // UserController.create(req.body)
  console.log(req.body)
  res.end();
});

router.get('/user/:email')

module.exports = router;