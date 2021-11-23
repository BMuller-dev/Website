//LISTE FILM
//-------------------------------------------------------------------------------
import { movies } from "./movie.js";

console.log(movies);

const finale_question = [
  "What is the genre of your movie ?",
  "Is your movie from after the 2000s ?",
  "Who is the main actor ?",
  "Is the director one of these proposals?",
  "Is your movie popular ?"
];

let provisional_question = finale_question;

console.log(provisional_question);
console.log(finale_question);
console.log("Début");

//while (random_question !== "Fait") {
/*whle ( !== "Fait") {
let random_question =
  provisional_question[
    Math.floor(Math.random() * (provisional_question.length - 0) + 0)
  ];
console.log(random_question);
if (random_question.includes(finale_question[1])) {
  console.log(provisional_question);
  provisional_question.splice(1, 1, "Fait");
  console.log(provisional_question);
}
if (random_question.includes(finale_question[0])) {
  console.log(provisional_question);
  provisional_question.splice(0, 1, "Fait");
  console.log(provisional_question);
}
{
  result;
}*/
