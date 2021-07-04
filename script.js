document.addEventListener("DOMContentLoaded", () => {



//fetching server data

const characterURL =  "http://localhost:3000/characters"
const episodeURL = "http://localhost:3000/Episodes"



fetch(characterURL)
.then(res => res.json())
.then(data => {
  console.log(data)
  const ul = document.querySelector("#charContainer")
  data.forEach(characters => {
   ul.append(JSON.stringify(characters))
  })
})


fetch(episodeURL)
.then(res => res.json())
.then(data => {
  console.log(data)
  const li = document.querySelector("#epContainer")
  data.forEach(Episodes => {
   li.append(JSON.stringify(Episodes))
  })
})

//search function/ menu OR random 'Loki' fact generator



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
 question: "In Episode 4, Mobius is killed.",
 answer:[
   {a: "true"},
   {b: "false"}
 ]
}
];



// // correct answer function. use ""== ""?
// const answer = "false"

// function quizGrading(){
//   if (answer == "false")
//   {
//     console.log("correct!")
//   }
//   else {
//     console.log("wrong!")
//   }
// }


//Event Listeners
 
      //selecting answer
  const trueButton = document.getElementById("trueButton");
  const falseButton = document.getElementById("falseButton");
  const trueButton2 = document.getElementById("trueButton2");
  const falseButton2 = document.getElementById("falseButton2");
  trueButton.addEventListener("click", () => {
    alert("wrong!")
  });
  falseButton.addEventListener("click", () =>{
    alert("right!")
  });
  trueButton2.addEventListener("click", () => {
    alert("right!")
  });
  falseButton2.addEventListener("click", () =>{
    alert("wrong!")
  });


});