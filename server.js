require('dotenv').config();

// Require server that has been configured w/ middleware
const app = require('./config/server').app;

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV==="production") {
  app.use((req, res, next) => {
    if (req.header['x-forwarded-proto'] !== 'https') {
      res.redirect('https://' + req.hostname + req.url);
    } else {
      next()
    }
  })
}

// Connect to database
require('./config/database').connect();
require('./models');

// Routes
const routes = require('./routes');
const router = require('express').Router();
router.use(routes);

router.get('*', (req, res) => {
  res.redirect('/');
});

app.use(router);

app.listen(PORT, () => console.log('Server listening on PORT ' + PORT));