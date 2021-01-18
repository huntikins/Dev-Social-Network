// sources used:
  // 1.) http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/  (Whole password reset process. Got most info from here.)
  // 2.) https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1  (For setting it up with gmail)
  // 3.) https://medium.com/@bobziroll/okay-so-i-havent-been-able-to-get-the-service-account-thing-to-work-but-i-ended-up-installing-38684d22811  (to help fix an issue i had with code from source 2)

const nodemailer = require('nodemailer');

let missingEnvVars = [];
checkForMissingEnvVar('Email_From_Address');

const smtpTransport = createSmtpTransport();

const sendPasswordResetEmail = (req, res, token, user, done) => {
  if (!smtpTransport) {
    const msg = 'Sorry, this service is unavailable.';
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


function checkForMissingEnvVar(varName) {
  if (!process.env.varName) {
    missingEnvVars.push(varName);
    console.log(`Missing '${varName}' environment variable in '.env' file. Nodemailer will not work.`);
  }
}

function createSmtpTransport() {
  const envVarsForGmailNames = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN'];
  const isUsingGmail = !envVarsForGmailNames.map(varName => !!process.env[varName]).includes(false);
  const optionsObj = isUsingGmail ? getGmailOptionsObj() : getSendgridOptionsObj();
  return optionsObj && nodemailer.createTransport(optionsObj);
}

function getGmailOptionsObj() {
  const { google } = require('googleapis');
  const {
    Email_From_Address, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN
  } = process.env;
  envVarsForGmailNames.forEach(varName => {
    checkForMissingEnvVar(varName, env,)
  });
  if (missingEnvVars.length > 0) return;
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN
  );
  oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
  const accessToken = oauth2Client.getAccessToken();
  return {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: Email_From_Address,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
      accessToken
    }
  };
}

function getSendgridOptionsObj() {
  const { Sendgrid_Username, Sendgrid_Password } = process.env;
  checkForMissingEnvVar('Sendgrid_Username');
  checkForMissingEnvVar('Sendgrid_Password');
  return {
    service: 'SendGrid',
    auth: {
      user: Sendgrid_Username,
      pass: Sendgrid_Password
    }
  };
}
