document.addEventListener("DOMContentLoaded", () => {



//fetching server data

const characterURL =  "http://localhost:3000/loki"
const episodeURL = "http://localhost:3000/Episodes"


fetch(characterURL)
.then(res => res.json())
.then(data => {
  console.log(data)
  const ul = document.querySelector("#charContainer")
  data.forEach(loki => {
    const charpieces =  loki.summary;
   const li = document.createElement("charContainer")
    li.innerText = charpieces
    ul.append(li)
  })
})

fetch(episodeURL)
.then(res => res.json())
.then(data => {
  console.log(data)
  const ul = document.querySelector("#epContainer")
  data.forEach(Episodes => {
    const eppieces = Episodes.name + " SUMMARY: " + Episodes.summary ;
   const li = document.createElement("epContainer")
    li.innerHTML = eppieces
    ul.append(li)
  })
})


//Event Listeners
      // onmouseover in html
     const mainphoto = document.getElementById("main-photo");

     mainphoto.addEventListener("mouseover", () => 
     mainphoto.innerText = "loki show"
     );
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


});