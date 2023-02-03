const { getStarWarsPeopleDIBase } = require('../getStarWarsPeopleDI')


beforeAll(() => {
  jest.clearAllMocks()
})

describe('getStarWarsPeopleDI', () => {
  const mockFetcher = jest.fn(() => ({
    data: {
      count: 3,
      results: [
        { name: 'Mock Skywalker' },
        { name: 'Mock C-3PO' },
        { name: 'Mock R2-D2' }
      ]
    }
  }))
  const getStarWarsPeopleDI = getStarWarsPeopleDIBase(mockFetcher)

  it('should return an array of names', async () => {
    const data = await getStarWarsPeopleDI(1)
    expect(mockFetcher).toHaveBeenCalledWith('https://swapi.dev/api/people?page=1')
    expect(data).toEqual([ 'Mock Skywalker', 'Mock C-3PO', 'Mock R2-D2' ])
  })

  it('should send the proper page number with the request', async () => {
    await getStarWarsPeopleDI(2)
    expect(mockFetcher).toHaveBeenCalledWith('https://swapi.dev/api/people?page=2')
  })
})