const axios = require('axios')
const getStarWarsPeoplePromise = require('../getStarWarsPeoplePromise')

jest.mock('axios')

const mockGetResponse = {
  status: '200',
  data: {
    count: 3,
    results: [
      { name: 'Mock Skywalker' },
      { name: 'Mock C-3PO' },
      { name: 'Mock R2-D2' }
    ]
  }
}

describe('getStarWarsPeoplePromise', () => {
  it('should return an array of names', async () => {
    axios.get.mockResolvedValueOnce(mockGetResponse)
    // axios.get.mockReturnValueOnce(mockGetResponse)
    const data = await getStarWarsPeoplePromise(1)
    expect(data).toEqual([ 'Mock Skywalker', 'Mock C-3PO', 'Mock R2-D2' ])
  })
})