const express = require('express'),
app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.render('index');
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


app.listen(3000,function(){
	console.log('server is runing...');
});