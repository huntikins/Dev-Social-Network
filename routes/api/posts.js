const router = require('express').Router();

const controllers = require('../../controllers');

router.post('/', (req, res) => {
  controllers.Post.create(req.body, result => res.json(result));
});

module.exports = router;