/* SOURCES USED:
  1.) http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/  (Whole password reset process. Got most info from here.)
  2.) https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1  (For setting it up with gmail)
  3.) https://medium.com/@bobziroll/okay-so-i-havent-been-able-to-get-the-service-account-thing-to-work-but-i-ended-up-installing-38684d22811  (to help fix an issue i had with code from source 2)
*/

const smtpTransport = require('./smtpTransport');

const sendPasswordResetEmail = (req, res, token, user, done) => {
  if (!smtpTransport) {
    const msg = 'Service Unavailable. Sorry!';
    return res.status(503).json({ message: msg, error: msg });
  }
  const mailOptions = {
    to: user.email,
    from: process.env.Email_From_Address,
    subject: 'Cerebellum Password Reset',
    text: 'You are receiving this because you have requested to reset the password for your Cerebellum account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://' + req.headers.host + '/passwordreset/' + token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };
  smtpTransport.sendMail(mailOptions, function(err) {
    if (err) return done(err, 'done');
    res.json({ success: 'An e-mail has been sent to ' + user.email + ' with further instructions.' });
  });
}

module.exports = sendPasswordResetEmail;
