const router = require('express').Router();

const UserController = require('../../controllers/User');


router.get(
  '/populated/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.populate(
      req.params.id,
      result => res.json({
        currentUser: req.user._id,
        otherUser: result
      })
    );
  }
);

router.get(
  '/posts',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.getUserPosts(
      req.user._id,
      result => res.json({
        userId: req.user._id,
        posts: result
      })
    );
  }
);

router.get(
  '/posts/:userId',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.getUserPosts(
      req.params.userId,
      result => res.json({
        currentUser: req.user._id,
        otherUser: result
      })
    );
  }
);

router.get(
  '/populated',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.populate(
      req.user._id,
      result => res.json(result)
    );
  }
);

router.get(
  '/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.findById(
      req.params.id,
      (err, user) => res.json({
        user,
        currentUser: req.user._id
      })
    );
  }
);

router.get(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => res.json(req.user)
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

router.post(
  '/s3upload',
  require('connect-ensure-login').ensureLoggedIn('api/auth/fail'),
  UserController.imageUpload
);


module.exports = router;