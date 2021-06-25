//getting API data

const URL = "https://reststop.randomhouse.com/resources/titles/"

function getBooks(){
return fetch(URL,{
method: "GET",
headers: {
    "Content-type": application/json
},
body: JSON.stringify(body)
})
.then(response => response.json())
}