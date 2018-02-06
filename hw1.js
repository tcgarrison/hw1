// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}

let current = "Currently it is " + weatherData.current.temperature + " degrees and " + weatherData.current.conditions + ". ";

let forecast1 = "Tomorrow it will be " + weatherData.forecast[0].temperature + " and " + weatherData.forecast[0].conditions + ". ";

let forecast2 = "The next day it will see " + weatherData.forecast[1].conditions + " skies, with a temperature of "  + weatherData.forecast[1].temperature + ".";

let weatherSummary = current + forecast1 + forecast2;

console.log(weatherSummary);
