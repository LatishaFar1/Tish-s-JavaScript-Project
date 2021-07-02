//fetching API data
// "https://www.tvmaze.com/api"
const URL = "https://api.tvmaze.com/singlesearch/shows?q=loki"

function getTV(){
return fetch(URL)
.then(res => {
  return res.json()
})
.then(dataRes => {
  console.log(dataRes);
}) 
};

//getting data on Loki - fix me!


const lokiInfo = document.querySelector("#tvshow")


getTV()
.then(data => {
  const lokiSumm = data.summary
  lokiInfo.innerHTML = summary
})






// maybe add search for your own show?

const searchURL = `http://api.tvmaze.com/search/shows?q=${search}`;
function searchTV(search){
return fetch(URL)
.then(res => {
  return res.json()
})
.then(dataRes => {
  console.log(dataRes);
}) 
};


