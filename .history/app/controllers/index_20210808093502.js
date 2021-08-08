
let seriesMovie = document.querySelector("#series-movie")
let cinema = document.querySelector("#cinema")
let animatedCartoon = document.querySelector("#animated-cartoon")
let oddMovie = document.querySelector("#odd-movie");


function getData() {
  return fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3nNQbiyDA7SrJJAJcrkobDdDP7JZPFm0Ls9yKxMz2gMpwERh8HYxHXVAI")
}

getData()
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (let loaiPhim in data.phim) {
      console.log(data.phim[loaiPhim])
    }
  })
  .catch(function (err) {
    console.log(err)
  })