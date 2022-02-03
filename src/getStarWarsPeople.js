const axios = require('axios')

const getStarWarsPeople = async (pageNo = 1) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/people?page=${pageNo}`)
    return response.data.results.map(person => person.name)
  } catch (e) {
    console.log('Failed to retrieve people', e)
    return null
  }
}
  

module.exports = getStarWarsPeople