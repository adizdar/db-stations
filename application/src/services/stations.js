const axios = require('axios').create({
    baseURL: 'http://localhost:3000/api/v1'
});

const PATH = '/stations'

class StationsService {
  /**
   * @param {object} axios
   * @param {string} path
   */
  constructor (axios, path) {
    this.path = path
    this.http = axios
  }

  get() {
      return this.http.get(this.path)
  }
}

export default new StationsService(axios, PATH)