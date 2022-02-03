const nock = require('nock')
const getStarWarsPeople = require('../getStarWarsPeople')

const mockGetResponse = {
  count: 3,
  results: [
    { name: 'Mock Skywalker' },
    { name: 'Mock C-3PO' },
    { name: 'Mock R2-D2' }
  ]
}

const starWarsMockApi = nock('https://swapi.dev')

describe('getStarWarsPeople', () => {
  it('should return an array of names', async () => {
    starWarsMockApi
      .get(/\/api\/people\?page=/)
      .reply(200, mockGetResponse)
    const data = await getStarWarsPeople(1)
    // expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people?page=1')
    expect(data).toEqual([ 'Mock Skywalker', 'Mock C-3PO', 'Mock R2-D2' ])
  })
})