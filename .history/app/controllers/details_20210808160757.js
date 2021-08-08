import { getData } from "./data.js";
let listFilm = document.querySelector(".film-connect .list-movie");

let renderView = () => {
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

renderView();