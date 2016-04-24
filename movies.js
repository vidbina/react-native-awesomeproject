var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class MoviesSource {
  fetchData(callback) {
    return fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData);
      })
      .done();
  }
}
