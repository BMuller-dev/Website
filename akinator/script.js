import {
  movies
} from "./movie.js";

const finale_question = [
  "What is the genre of your movie ?",
  "Is your movie from after the 2000s ?",
  "Who is the main actor ?",
  "Is the director one of these proposals?",
  "Is your movie popular ?"
];
let provisional_question = finale_question;

let shuffle = provisional_question.sort((a, b, c) => 0.5 - Math.random());
console.log(shuffle);


console.log(shuffle);
while (!shuffle.length == []) {
  if (shuffle[0].includes("genre")) {
    console.log(shuffle[0]);
    shuffle.shift()
  }
  if (shuffle[0].includes("popular")) {
    console.log(shuffle[0]);
    shuffle.shift()
  }
  if (shuffle[0].includes("actor")) {
    console.log(shuffle[0]);
    shuffle.shift()
  }
  if (shuffle[0].includes("director")) {
    console.log(shuffle[0]);
    shuffle.shift()
  }
  if (shuffle[0].includes("2000s")) {
    console.log(shuffle[0]);
    shuffle.shift()
  }
}