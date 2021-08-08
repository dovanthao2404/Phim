
function getData() {
  return fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3nNQbiyDA7SrJJAJcrkobDdDP7JZPFm0Ls9yKxMz2gMpwERh8HYxHXVAI")
}

function getDataHome() {
  let arr = {}
  getData()
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data.phim)
      for (let loaiPhim in data.phim) {
        console.log(data.phim[loaiPhim])
      }
    })
}


export { getData, getDataHome };