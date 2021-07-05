document.addEventListener("DOMContentLoaded", () => {



//fetching server data

const characterURL =  "http://localhost:3000/loki"
const episodeURL = "http://localhost:3000/Episodes"
const descURL = "http://localhost:3000/Descripton"


fetch(characterURL)
.then(res => res.json())
.then(data => {
  const html = data.map(loki => {
    return `<p></p>` + loki.age + `<p></p>` + loki.summary;
  }).join("");
  console.log(html)
  document.querySelector("#char").innerHTML = html;
})

fetch(descURL)
.then(res => res.json())
.then(data => {
  const html = data.map(Description => {
    return `<p></p>` + "genre: " + Description.genre + `<p></p>` + Description.summary;
  }).join("");
  console.log(html)
  document.querySelector("#summ").innerHTML = html;
})


fetch(episodeURL)
.then(res => res.json())
.then(data => {
  const html = data.map(Episodes => {
    return `<p></p>` + Episodes.name + `<p></p>` + Episodes.summary;
  }).join("");
  console.log(html)
  document.querySelector("#episodes").innerHTML = html;
})



//Event Listeners
      // onmouseover in html for quiz
   

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
      //subscribe form
  const subscribe = document.getElementById("subscribe")
  subscribe.addEventListener("submit", (event) =>{
    event.preventDefault();
    alert("submitted!")
  });

  //bonus! random marvel movie/tv show suggestion
   const suggestionbutt = document.getElementById("suggestionbutt");
  const suggested = document.getElementById("suggested");

  const suggestions = [
    "Thor",
    "Thor: The Dark World",
    "Thor: Ragnarok",
    "Avengers",
    "Avengers: Infinity War"
  ];

  suggestionbutt.addEventListener("click", () => {
    const randomsugg = suggestions[Math.floor(Math.random() * suggestions.length)]
    suggested.innerHTML = randomsugg;
  })

});