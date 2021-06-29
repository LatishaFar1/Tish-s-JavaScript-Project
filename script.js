//getting API data
// "https://reststop.randomhouse.com/resources/authors?lastName=Riordan&firstName=Rick"
const URL = "https://reststop.randomhouse.com/resources/authors?lastName=Riordan&firstName=Rick"

function getAuthor(){
return fetch(URL,{
mode: "no-cors",
method: "GET",
headers: {
    "Content-type": "application/json"
}
})
.then(response => response.json())
};


