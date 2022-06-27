import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("form#gif").submit(function (event) {
    event.preventDefault();
    const userSearch = $("#search").val();
    $("#search").val();

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearch}&limit=1&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

       function getElements(response) {
        console.log(response);
      $("#output-image").html(`<img src="${response.data[0].images.original.url}"></img>`);
  }
});
});
