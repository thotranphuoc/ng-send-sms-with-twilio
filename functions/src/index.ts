import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import * as twilio from 'twilio';

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const accountSid = firebaseConfig.twilio.sid;
// const authToken = firebaseConfig.twilio.token;

const accountSid = 'AC5d4b445fcc2c702e692c812b413a0a98';
const authToken = '4c12c5de51d3e1d3439c5ab72bbae614'

const client = twilio(accountSid, authToken);
const twilioNumber = '+16606283115'

export const sendMessage = functions.database.ref('pizzaOrders/order123').onUpdate(event => {
    return client.messages
        .create({
            from: twilioNumber,
            to: '+84937811633',
            body: 'test form cloud functions'
        })
        .then((msg) => {
            console.log(msg.sid);
        })
        .catch(err => {
            console.log(err);
        })
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
