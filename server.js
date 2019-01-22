const express = require('express')
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));


app.use((req,res,next) => {
  res.render('Maintenance.hbs')
})

app.use((req,res,next) => {
  console.log('====',new Date().toString(),req.method, req.url);
  next();
});




hbs.registerHelper('currentYear',() => {
  return new Date().getFullYear()
});

hbs.registerHelper('upperCased',(text) => {
  return text.toUpperCase();
});

app.get('/',(req,res) => {

  res.render('home.hbs',{
    title:'home Page',
    welcomeMessage:'welcome to the website!!'
  })

});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    title: 'About Page!!'
  })
});



app.get('/bad',(req,res) => {
  res.send({
    messageError: 'Unable to fulfill this request',
    status: 'NOT OK'
  })
});




app.listen(3000);
