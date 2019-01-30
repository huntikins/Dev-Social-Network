const router = require('express').Router();

const controllers = require('../../controllers');

router.post(
  '/like/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    controllers.Post.like(
      req.user._id,
      req.params.id,
      result => res.json(result)
    );
  }
);

router.post(
  '/unlike/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    controllers.Post.unlike(
      req.user._id,
      req.params.id,
      result => res.json(result)
    );
  }
);

router.post(
  '/comment/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    console.log('\n\n')
    console.log(req.body)
    controllers.Post.addComment(
      req.user._id,
      req.body.postId,
      req.body.comment,
      result => res.json(result)
    );
  }
);

router.delete(
  '/comment/',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    console.log(req.body)
    controllers.Post.deleteComment(
      req.user._id,
      req.body.postId,
      req.body.commentId,
      result => res.json(result)
    );
  }
);

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
    controllers.User.getFollowingPosts(
      req.user._id,
      result => res.json({
        currentUserId: req.user._id,
        posts: result.posts,
        currentUserKB: result.currentUserKB,
        currentUserFollowing: result.currentUserFollowing
      })
    );
  }
);

module.exports = router;