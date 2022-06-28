export default class GiphyTrending {
  static getGif() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;

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