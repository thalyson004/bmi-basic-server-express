const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, ()=>{
  console.log('Server starts.');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  /*
  Underweight = <18.5
  Normal weight = 18.5–24.9
  Overweight = 25–29.9
  Obesity = BMI of 30 or greater
  */
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let BMI = weight/(height*height);

  var result = 'Underweight';
  if(BMI >= 18.5) result = 'Normal weight';
  if(BMI >= 25) result = 'Overweight';
  if(BMI >= 30) result = 'Obesity';

  res.send( { bmi: BMI, result: result } );
});
