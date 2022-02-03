const axios = require('axios')
const getStarWarsPeople = require('../getStarWarsPeople')

jest.spyOn(axios, 'get')

beforeAll(() => {
  jest.clearAllMocks()
})

describe('getStarWarsPeople', () => {
  it('should return an array of names', async () => {
    const data = await getStarWarsPeople(1)
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people?page=1')
    expect(data).toEqual([
      'Luke Skywalker',
      'C-3PO',
      'R2-D2',
      'Darth Vader',
      'Leia Organa',
      'Owen Lars',
      'Beru Whitesun lars',
      'R5-D4',
      'Biggs Darklighter',
      'Obi-Wan Kenobi',
    ])
  })

  it('should send the proper page number with the request', async () => {
    await getStarWarsPeople(2)
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people?page=2')
  })
})