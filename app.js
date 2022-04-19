const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = Math.round(weight / Math.pow(height, 2));

  if (bmi < 18.5) {
    res.send("Your BMI is " + bmi + ", so you are underweight.");
  }
  if (bmi > 18.5 && bmi <= 24.9) {
    res.send("Your BMI is " + bmi + ", so you have normal weight.");
  }
  if (bmi > 24.9) {
    res.send("Your BMI is " + bmi + ", so you are overweight.");
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
