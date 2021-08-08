
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
        let filmType = loaiPhim;
        objectFilm.filmType = {};
        for (let i = 0; i < 6; i++) {
          let tenPhim = data.phim[loaiPhim][i].title;
          objectFilm.loaiPhim.tenPhim = data.phim[loaiPhim][i];
        }
      }
    })
    .catch(function (err) {
      console.log(err)
    })
  console.log(objectFilm)
  return objectFilm;
}


export { getData, getDataHome };