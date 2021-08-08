import { getData } from "./data.js";
import { n } from "./index.js"

let listFilm = document.querySelector(".film-connect .list-movie");
let filmContent = document.querySelector(".film-content");

const renderCurrentFilm = () => {
  getData()
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      filmContent.innerHTML = `

      <div class="film-img">
          <img src="${data.phim.phimbo[1].imageUrl}" alt="">
        </div>
        <div class="film-details">
          <h1>${data.phim.phimbo[1].title}</h1>
          <a href="${data.phim.phimbo[1].url}" class="btn" target="_blank">Xem
            Phim</a>
        </div>

      `
    })
}

const renderContact = () => {
  getData()
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {

      for (let loaiPhim in data.phim) {
        let html = ""
        for (let i = 0; i < 6 * 3; i++) {
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
        listFilm.innerHTML = html;
      }
    })
    .catch(function (err) {
      console.log(err)
    })
}


renderCurrentFilm();
renderContact();
