const axios = require('axios')

const getStarWarsPeoplePromise = (pageNo = 1) =>
  axios
    .get(`https://swapi.dev/api/people?page=${pageNo}`)
    .then(response => response.data.results.map(person => person.name))
    .catch(e => {
      console.log('Failed to retrieve people', e)
      return null
    })
  

module.exports = getStarWarsPeoplePromise