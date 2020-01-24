exports.randInRange(n, min, max) {
  const multiplier = max - min;
  const rands = Array(n)
  return rands.map(elem => {
    return Math.random() * multiplier + min;
  })
}