const app = require('./config/server').app;

const PORT = process.env.PORT || 8080

// Connect to database
require('./config/database').connect();

// Routes
const routes = require('./routes');
const router = require('express').Router();
router.use(routes);

router.get('*', (req, res) => {
  res.redirect('/');
});

app.use(router);

app.listen(PORT, () => console.log('Server listening on PORT ' + PORT));