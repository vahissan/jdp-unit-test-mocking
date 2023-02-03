const axios = require('axios')

const getStarWarsPeopleDIBase = (fetcher) => async (pageNo = 1) => {
  try {
    const response = await fetcher(`https://swapi.dev/api/people?page=${pageNo}`)
    return response.data.results.map(person => person.name)
  } catch (e) {
    console.log('Failed to retrieve people', e)
    return null
  }
}

module.exports = {
  getStarWarsPeopleDIBase,
  getStarWarsPeopleDI: getStarWarsPeopleDIBase(axios.get)
}