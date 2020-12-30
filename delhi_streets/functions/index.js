const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express'),
app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.render('home');
});
app.get('/mall',(req,res)=>{
	res.render('mall');
});
app.get('/visit',(req,res)=>{
	res.render('visit');
});
app.get('/food',(req,res)=>{
    res.render('food');
});

exports.app = functions.https.onRequest(app);
