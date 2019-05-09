const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

// sources used: 1.) http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/  (Whole password reset process. Got most info from here.)
  // 2.) https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1  (For setting it up with gmail)
  // 3.) https://medium.com/@bobziroll/okay-so-i-havent-been-able-to-get-the-service-account-thing-to-work-but-i-ended-up-installing-38684d22811  (to help fix an issue i had with code from source 2)

const oauth2Client = new OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN
);
oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'djknit@gmail.com',
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    refreshToken: GOOGLE_REFRESH_TOKEN,
    accessToken
  }
});

const sendPasswordResetEmail = (req, res, token, user, done) => {
  const mailOptions = {
    to: user.email,
    from: 'djknit@gmail.com',
    subject: 'Cerebellum Password Reset',
    text: 'You are receiving this because you (or someone else) has requested to reset the password for your Cerebellum account.\n\n' +
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