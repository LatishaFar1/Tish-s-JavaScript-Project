//getting API data
// "https://reststop.randomhouse.com/resources/authors?lastName=Riordan&firstName=Rick"
const URL = "https://reststop.randomhouse.com/resources/authors?lastName=Riordan&firstName=Rick"

function getBooks(){
return fetch(URL,{
method: "GET",
headers: {
    "Content-type": application/json
},
body: JSON.stringify(body)
})
.then(response => response.json())
};
console.log(getBooks);

//author URI
//author uri="https://reststop.randomhouse.com/resources/authors/2182452"