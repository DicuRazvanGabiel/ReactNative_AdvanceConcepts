const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = (req, res) => {
    if(!req.body.phone){
        return res.status(422).send({ error:'You must provide a phone number' });
    }

    const phone = String(req.body.phone);

    admin.auth().getUser(phone)
        .then(userRecord => {
            const code = Math.floor(Math.random() * 8999 + 1000);

            twilio.messages.create({
                body: 'Your code is ' + code,
                to: phone,
                from: '+19167135265'
            }, (err) => {
                if(err){ return res.status(422).send(err) }

                admin.database().ref('users/' + phone)
                    .update({ code: code, codeValid: true }, () => {
                        res.send({ success: true });
                    });

            });
        })
        .catch((err) => {res.status(422).send({ error: 'User not found' }) });
}