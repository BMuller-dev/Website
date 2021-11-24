import { movies } from "./movie.js";

const finale_question = [
  "What is the genre of your movie ?",
  "Is your movie from after the 2000s ?",
  "Who is the main actor ?",
  "Is the director one of these proposals?",
  "Is your movie popular ?"
];
let provisional_question = finale_question;

let shuffle = provisional_question.sort((a, b, c) => 0.5 - Math.random());
let i=1;

while (!shuffle.length == []) {
console.log(shuffle[0]);
if (shuffle[0].includes("genre")) {
  console.log('trier');
  shuffle.shift()} 
  if (shuffle[0].includes("popular")) {
    console.log('trier');
    shuffle.shift()} 
    shuffle.shift()
}


