const Axios = require('axios').default

module.exports = axios.create({
    baseURL: "https://graph.facebook.com/v5.0"
  });