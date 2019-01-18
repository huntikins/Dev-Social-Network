const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'cerebellumcommunity',
    pass: process.env.Sendgrid_Password
  }
});

const sendPasswordResetEmail = (req, res, token, user, done) => {
  const mailOptions = {
    to: user.email,
    from: 'djknit@gmail.com',
    subject: 'Cerebellum Password Reset',
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://' + req.headers.host + '/passwordreset/' + token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };
  smtpTransport.sendMail(mailOptions, function(err) {
    if (err) return done(err, 'done');
    res.json({ success: 'An e-mail has been sent to ' + user.email + ' with further instructions.\nIf you don\'t see the email in your inbox, check your spam folder.' });
  });
}

module.exports = sendPasswordResetEmail;