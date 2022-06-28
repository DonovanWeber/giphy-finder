import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import GiphyService from './giphy.service.js';
import GiphyRandom from './giphy-random-service.js';

$(document).ready(function () {
  $("form#gif").submit(function (event) {
    event.preventDefault();
    const userSearch = $("#search").val();
    $("#search").val();
    
    let promise = GiphyService.getGif(userSearch);

      promise.then((response) => {
        const body = JSON.parse(response);
      $("#output-image1").html(
        `<img src="${body.data[0].images.original.url}"></img>`
      );
      $("#output-image2").html(
        `<img src="${body.data[1].images.original.url}"></img>`
      );
      $("#output-image3").html(
        `<img src="${body.data[2].images.original.url}"></img>`
      );
    })
  });

  $("button#trending").click(function (event) {
    event.preventDefault();
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;

    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  
    function outputTrending(response) {
      const body = JSON.parse(response);
      $("#output-image1").html(
        `<img src="${body.data[0].images.original.url}"></img>`
      );
      $("#output-image2").html(
        `<img src="${body.data[1].images.original.url}"></img>`
      );
      $("#output-image3").html(
        `<img src="${body.data[2].images.original.url}"></img>`
      );
    }
  });
  $("button#random").click(function (event) {
    event.preventDefault();
    let promise = GiphyRandom.getGif();

    promise.then(function(response) {
      const body = JSON.parse(response);
      $("#output-image1").html(
        `<img src="${body.data.images.original.url}"></img>`);
      $("#output-image2").empty();
      $("#output-image3").empty();
    })
  });
});
