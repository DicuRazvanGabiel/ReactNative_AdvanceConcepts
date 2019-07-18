const admin = require('firebase-admin');
const functions = require('firebase-functions');

const createUser = require('./create_user');
const serviceAccount = require("./one-time-password-b6260-firebase-adminsdk-7gtan-b5f8d35d28.json");
const request_one_time_password = require('./request_one_time_password');
const verifyOneTimePassword = require('./verify_one_time_password');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-b6260.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser)
exports.request_one_time_password = functions.https.onRequest(request_one_time_password);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);