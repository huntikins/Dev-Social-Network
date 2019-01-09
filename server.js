const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('morgan')('combined')); // logs http requests

// Database
require('./config/database').connect();

// Routes
// const routes = require('./routes');
const router = express.Router();
// router.use(routes);

// router.get('*', (req, res) => {
//   res.redirect('/');
// });

app.use(router);

app.listen(PORT, () => console.log('Server listening on PORT ' + PORT));