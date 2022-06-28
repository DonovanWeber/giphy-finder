export default class GiphyService {
  static getGif(userSearch) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearch}&limit=3&offset=0&rating=g&lang=en`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}