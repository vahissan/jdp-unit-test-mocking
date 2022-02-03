const forEach = require('../forEach')

const testArray = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']
const mockCallback = jest.fn()

describe('forEach', () => {
  it('should invoke the callback for each element of the array', () => {
    forEach(testArray, mockCallback)
    // console.log(mockCallback.mock)
    expect(mockCallback).toHaveBeenCalledTimes(5)
    expect(mockCallback).toHaveBeenLastCalledWith('Leia Organa')
    expect(mockCallback).toHaveBeenCalledWith('R2-D2')
    expect(mockCallback).toHaveBeenNthCalledWith(3, 'R2-D2')
  })

  it.skip('should not break for an empty array', () => {
    forEach([], mockCallback)
    expect(mockCallback).not.toHaveBeenCalled()
  })
})