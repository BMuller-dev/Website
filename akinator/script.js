import { movies } from "./movie.js";

function genre($x) {
  
}

function popular($x){
  
  
}



const final_questions = [
  ["What is the genre of your movie ?"],
  ["Is your movie from after the 2000s ?"],
  ["Who is the main actor ?"],
  ["Is the director one of these proposals?"],
  ["Is your movie popular ?", popular()]
];

let shuffle = final_questions.sort(() => Math.random() - 0.5);
alert(shuffle);

shuffle.forEach(element => {
  
});

final_questions