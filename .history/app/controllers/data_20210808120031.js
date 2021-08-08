
function getData() {
  return fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3nNQbiyDA7SrJJAJcrkobDdDP7JZPFm0Ls9yKxMz2gMpwERh8HYxHXVAI")
}

function getDataHome() {
  let objectFilm = {};
  getData()
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      for (let loaiPhim in data.phim) {
        objectFilm.loaiPhim = {};
        for (let i = 0; i < 6; i++) {
          objectFilm.loaiPhim.data.phim[loaiPhim][i] = data.phim[loaiPhim][i];
        }
      }
    })
  return objectFilm;
}


export { getData, getDataHome };