const forEach = (array, callbackFn) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    callbackFn(element)
  }
}

module.exports = forEach