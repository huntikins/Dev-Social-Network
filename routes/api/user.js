const router = require('express').Router();
const UserController = require('../../controllers/User');
const imageUpload = require("../../services/aws_service");

router.get(
  '/search/:query',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.search(
      req.params.query,
      result => res.json(result)
    );
  }
);

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
        posts: result.posts,
        kbItems: result.kbItems
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
      result_1 => {
        UserController.getPostsInUserKB(
          req.user._id,
          result_2 => res.json({
            otherUser: result_1.posts,
            currentUser: result_2
          })
        );
      }
    );
  }
);

router.get(
  '/kbItems/:userId',
  (req, res) => {
    console.log("\n\nhit\n\n")
    UserController.getKB(
      req.params.userId,
      result => res.json(result)
    );
  }
);

router.get(
  '/kbItems',
  (req, res) => {
    UserController.getKB(
      req.user._id,
      result => res.json(result)
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
  '/image/:id',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.findById(
      req.params.id,
      (err, result) => res.json({ image: result.picture })
    );
  }
);

router.get(
  '/image',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    UserController.findById(
      req.user._id,
      (err, result) => res.json({ image: result.picture })
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
      req.body.password,
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

const singleUpload = imageUpload.single('profileImage');
router.post('/s3upload',
  require('connect-ensure-login').ensureLoggedIn('/api/auth/fail'),
  (req, res) => {
    singleUpload(req, res, (err) => {
      if (err) {
        return res.status(422).send({
          errors:
            [{ title: "Image Upload Error", detail: err.message }]
        });
      }
      // return res.json({ 'imageUrl': req.file.location });
      UserController.imageUpload(
        req.user._id,
        req.file.location,
        result => res.json(result)
      );
    })
  });



module.exports = router;