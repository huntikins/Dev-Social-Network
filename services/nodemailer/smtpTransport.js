// sources: (see './index.js')

const nodemailer = require('nodemailer');

let optionsObj = {};
let hasMissingEnvVar = false;

checkForEnvVar('Email_From_Address');

const gmailEnvVarsNames = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN'];
const isUsingGmail = gmailEnvVarsNames.map(varName => !!process.env[varName]).includes(true);

if (isUsingGmail) {
  const { google } = require('googleapis');
  optionsObj.service = 'gmail';
  const { Email_From_Address, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
  gmailEnvVarsNames.forEach(checkForEnvVar);
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
    accessToken: !hasMissingEnvVar && oauth2Client.getAccessToken()
  };
}
else {
  optionsObj.service = 'SendGrid';
  const pairedAuthPropAndEnvVarNames = { user: 'Sendgrid_Username', pass: 'Sendgrid_Password' };
  Object.keys(pairedAuthPropAndEnvVarNames).forEach(authPropName => {
    const envVarName = pairedAuthPropAndEnvVarNames[authPropName];
    checkForEnvVar[envVarName];
    optionsObj.auth[authPropName] = process.env[envVarName];
  });
}

module.exports = !hasMissingEnvVar ? nodemailer.createTransport(optionsObj) : undefined;


function checkForEnvVar(varName) {
  if (!process.env.varName) {
    hasMissingEnvVar = true;
    console.log(`Missing environment variable '${varName}' in '.env' file. Nodemailer will not work.`);
  }
}



// let envVarsInfo = {
//   hasMissing: false,
//   checkForVar(varName) {
//     if (!process.env.varName) {
//       this.hasMissing = true;
//       console.log(`Missing environment variable '${varName}' in '.env' file. Nodemailer will not work.`);
//     }
//   }
// };

// function setGmailOptions() {
//   const { google } = require('googleapis');
//   optionsObj.service = 'gmail';
//   const { Email_From_Address, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
//   gmailEnvVarsNames.forEach(checkForEnvVar);
//   const oauth2Client = new google.auth.OAuth2(
//     GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET,
//     GOOGLE_REFRESH_TOKEN
//   );
//   oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
//   const accessToken = !hasMissingEnvVar && oauth2Client.getAccessToken();
//   optionsObj.auth = {
//     type: 'OAuth2',
//     user: Email_From_Address,
//     clientId: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     refreshToken: GOOGLE_REFRESH_TOKEN,
//     accessToken
//   };
// }

// function setSendgridOptions() {
//   optionsObj.service = 'SendGrid';
//   const pairedAuthPropAndEnvVarNames = { user: 'Sendgrid_Username', pass: 'Sendgrid_Password' };
//   Object.keys(pairedAuthPropAndEnvVarNames).forEach(authPropName => {
//     const envVarName = pairedAuthPropAndEnvVarNames[authPropName];
//     checkForEnvVar[envVarName];
//     optionsObj.auth[authPropName] = process.env[envVarName];
//   });
// }

