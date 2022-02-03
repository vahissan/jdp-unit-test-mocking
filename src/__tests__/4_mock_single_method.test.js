const axios = require('axios')
const getStarWarsPeople = require('../getStarWarsPeople')

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

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: jest.fn(() => Promise.resolve(mockGetResponse))
}))

describe('getStarWarsPeople', () => {
  it('should return an array of names', async () => {
    const data = await getStarWarsPeople(1)
    expect(data).toEqual([ 'Mock Skywalker', 'Mock C-3PO', 'Mock R2-D2' ])
  })
})