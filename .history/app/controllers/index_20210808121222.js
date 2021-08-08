import { getData, getDataHome } from "./data.js"

let seriesMovie = document.querySelector("#series-movie .list-movie")
let cinema = document.querySelector("#cinema .list-movie")
let animatedCartoon = document.querySelector("#animated-cartoon .list-movie")
let oddMovie = document.querySelector("#odd-movie .list-movie");

let listTypeFilm = [seriesMovie, cinema, animatedCartoon, oddMovie];

const app = {

  renderView: function () {

    var data = getDataHome()

    let count = 0;
    for (let loaiPhim in data.phim) {
      var html = ""
      for (let i = 0; i < 6; i++) {
        html += `
            <div class="movie__item">
                <div class="movie__content">
                <a href="${data.phim[loaiPhim][i].url}">
                  <img
                    src="${data.phim[loaiPhim][i].imageUrl}"
                    alt="">
                  <p>${data.phim[loaiPhim][i].title}</p>
                  </a>
                </div>
              </div>`
      }
      listTypeFilm[count].innerHTML = html;
      count++;
    }
  },
  start: function () {
    renderView()
  }

}

app.start();
