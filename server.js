const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req, res){
    let h = Number(req.body.height)
    let w = Number(req.body.weight)

    let bmi = w * 10000 / (h*h)
    let idealWeight;
    let condition = "healthy"

    if(bmi>24){
        idealWeight = (24 * h * h) / 10000
        condition = "overweight"
    }
    else if (bmi<20){
        idealWeight = (20 * h * h) / 10000
        condition = "underweight"
    }
    else{
        idealWeight = (22 * h * h) / 10000
    }

    res.send(`<h1>Your BMI is: ${bmi.toFixed(2)}</h1><h3>You are ${condition}, Your ideal weight is: ${idealWeight.toFixed(0)} Kg</h3>`);
})

app.listen(3000, function(){
    console.log('Server started :)')
})