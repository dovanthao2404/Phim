
let seriesMovie = document.querySelector("#series-movie .list-movie")
let cinema = document.querySelector("#cinema .list-movie")
let animatedCartoon = document.querySelector("#animated-cartoon .list-movie")
let oddMovie = document.querySelector("#odd-movie .list-movie");


function getData() {
  return fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3nNQbiyDA7SrJJAJcrkobDdDP7JZPFm0Ls9yKxMz2gMpwERh8HYxHXVAI")
}

getData()
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (let loaiPhim in data.phim) {
      var html = ""
      for (let i = 0; i < 6; i++) {
        html += `
        <div class="movie__item">
            <div class="movie__content">
              <img
                src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"
                alt="">
              <p>Ten Phim</p>
            </div>
          </div>`
      }
    }
  })
  .catch(function (err) {
    console.log(err)
  })