// sources: see './index.js'

const nodemailer = require('nodemailer');
const { environmentVariablesCheckerFactory } = require('../utilities');

const envVarsChecker = environmentVariablesCheckerFactory('Nodemailer');

envVarsChecker.checkFor('Email_From_Address');

let optionsObj = {};

const gmailEnvVarsNames = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN'];

if (gmailEnvVarsNames.map(varName => !!process.env[varName]).includes(true)) {
  const { google } = require('googleapis');
  optionsObj.service = 'gmail';
  const { Email_From_Address, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
  gmailEnvVarsNames.forEach(envVarsChecker.checkFor);
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN
  );
  oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
  optionsObj.auth = {
    type: 'OAuth2',
    user: Email_From_Address,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    refreshToken: GOOGLE_REFRESH_TOKEN,
    accessToken: !envVarsChecker.hasMissingVar && oauth2Client.getAccessToken()
  };
}
else {
  optionsObj.service = 'SendGrid';
  const pairedAuthPropAndEnvVarNames = { user: 'Sendgrid_Username', pass: 'Sendgrid_Password' };
  optionsObj.auth = {};
  Object.keys(pairedAuthPropAndEnvVarNames).forEach(authPropName => {
    const envVarName = pairedAuthPropAndEnvVarNames[authPropName];
    envVarsChecker.checkFor(envVarName);
    optionsObj.auth[authPropName] = process.env[envVarName];
  });
}

envVarsChecker.logAll();

module.exports = !envVarsChecker.hasMissingVar ? nodemailer.createTransport(optionsObj) : undefined;
