//fetching server data

const CharacterURL =  "http://localhost:3000/characters"

fetch(CharacterURL)
.then(res => res.json())
.then(data => {
  console.log(data)
})



//search function/ menu OR random 'Loki' fact generator


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
const answer = "false"

function quizGrading(){
  if (answer == "false")
  {
    console.log("correct!")
  }
  else {
    console.log("wrong!")
  }
}


//Event Listeners
  //selecting answer

  const trueButton = document.getElementById("trueButton");
  const falseButton = document.getElementById("falseButton");
trueButton.addEventListener("click", () =>{
  alert("wrong!");
})
falseButton.addEventListener("click",() =>{
  alert("right!");
})