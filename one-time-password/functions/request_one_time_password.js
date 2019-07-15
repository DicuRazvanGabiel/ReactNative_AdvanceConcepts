const admin = require('firebase-admin');

module.exports = (req, res) => {
    if(!req.body.phone){
        return res.status(422).send({ error:'You must provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g,"");

    admin.auth().getUser(phone)
        .then(userRecord => {
            const code = Math.floor(Math.random() * 8999 + 1000);
        })
        .catch((err) => {res.status(422).send({ error: 'User not found' }) });
}