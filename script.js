//fetching API data
// "https://www.tvmaze.com/api"
const URL = "https://api.tvmaze.com/singlesearch/shows?q=loki"


function getTV(){
  return fetch(URL,{
    mode: "no-cors"
  })
  .then(res => {res.json()
  })
}
//getting data on Loki - fix me!


const lokiInfo = document.querySelector("#tvshow")


