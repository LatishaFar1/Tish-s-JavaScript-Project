//fetching server data

const CharacterURL =  "http://localhost:3000/characters"

fetch(CharacterURL)
.then(res => res.json())
.then(data => {
  console.log(data)
})






//search function/ menu OR random 'Loki' fact generator

//part 1
function characterInfo(){
  document.getElementById("")
}



// quiz?

const quizQuestions = [
 {
   question: "Loki is 400 years old.",
   answer: [
     {a: "true"},
     {b: "false"}
   ]
 },
 {
 question: "In Episode 2, Loki and Sylvie blow up the TVA.",
 answer:[
   {a: "true"},
   {b: "false"}
 ]
}
];


// correct answer function. use ""== ""?

function quizGrading(){
  if (answer == "false")
  {
    alert("correct!")
  }
}