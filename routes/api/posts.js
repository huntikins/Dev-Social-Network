const router = require('express').Router();

const controllers = require('../../controllers');

router.post(
  '/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    let post = req.body;
    post.user = req.user._id;
    controllers.Post.create(
      post,
      result_1 => {
        controllers.User.addPost(
          post.user,
          result_1._id,
          result_2 => res.json({ result_1, result_2 })
        );
      }
    );
  }
);

router.delete(
  '/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    controllers.Post.delete(
      req.user._id,
      req.params.id,
      result => res.json(result)
    );
  }
);

router.get(
  '/following',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    // controllers.
  }
)

module.exports = router;