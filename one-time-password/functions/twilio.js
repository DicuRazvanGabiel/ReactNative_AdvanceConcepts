const twilio = require('twilio');

const accountSid = 'AC68e45f98c2592e3320f5e64c7d4f2df9';
const authToken = '784f77d4c9f45ba60a3b3881fc2e3cb6';

module.exports = new twilio.Twilio(accountSid, authToken);