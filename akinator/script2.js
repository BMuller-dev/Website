import { movies } from "./movie.js";

const finale_question = [
  "What is the genre of your movie ?",
  "Is your movie from after the 2000s ?",
  "Who is the main actor ?",
  "Is the director one of these proposals?",
  "Is your movie popular ?"
];
let provisional_question = finale_question;

const shuffle = provisional_question.sort((a, b) => 0.5 - Math.random());

console.log(shuffle);
