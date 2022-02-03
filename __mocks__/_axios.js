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

const mockError = {
  response: {
    status: '404',
    data: 'Not found'
  }
}

module.exports = {
  get: jest.fn(() => Promise.resolve(mockGetResponse)),
  post: jest.fn(() => Promise.reject(mockError)),
  put: jest.fn(() => Promise.reject(mockError))
}