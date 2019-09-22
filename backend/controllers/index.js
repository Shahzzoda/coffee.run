const express = require('express');
const router = express.Router();
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'account id here';
const authToken = 'auth token here';
const client = require('twilio')(accountSid, authToken);

router.get('/twilio-placeorder', (req, res) => {
  client.messages.create({
    body: 'We have received your order! We will update you on the status of your coffee! ☕️',
    from: '+19292051608',
    to: '+19177432870'
  }).then(message => console.log(message.sid));
});

router.get('/twilio-order-accepted', (req, res) => {
  client.messages.create({
    body: 'A runner has accepted your order! Your coffee will be coming soon. 😍',
    from: '+19292051608',
    to: '+19177432870'
  }).then(message => console.log(message.sid));
});

router.get('/twilio-order-pickup', (req, res) => {
  client.messages.create({
    body: 'Your order has been successfully picked up! Please get ready to pick up your coffee. 🎉',
    from: '+19292051608',
    to: '+19177432870'
  }).then(message => console.log(message.sid));
});

router.get('/', (req, res) => {
  res.json({
      msg: "Successful GET to '/' route"
  });
});

router.get('/twilio-place-order');

router.use('/users', require('./users'));
router.use('/stores', require('./stores'));


module.exports = router;
