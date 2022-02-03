const axios = require('axios')
const getStarWarsPeople = require('../getStarWarsPeople')

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

const mockErrorResponse = {
  status: '500',
  data: 'Internal server error'
}

describe('getStarWarsPeople', () => {
  it('should return an array of names', async () => {
    axios.get.mockResolvedValueOnce(mockGetResponse)
    // axios.get.mockReturnValueOnce(mockGetResponse)
    // axios.get.mockImplementationOnce(() => Promise.resolve(mockGetResponse))
    const data = await getStarWarsPeople(1)
    expect(data).toEqual([ 'Mock Skywalker', 'Mock C-3PO', 'Mock R2-D2' ])
  })

  it('should return null on API error', async () => {
    axios.get.mockRejectedValueOnce(mockErrorResponse)
    // axios.get.mockImplementationOnce(() => Promise.reject(mockErrorResponse))
    const data = await getStarWarsPeople(1)
    expect(data).toBe(null)
  })

  it.skip('should return an array of names for the 2nd time', async () => {
    const data = await getStarWarsPeople(1)
    expect(data).toEqual([ 'Mock Skywalker', 'Mock C-3PO', 'Mock R2-D2' ])
  })
})