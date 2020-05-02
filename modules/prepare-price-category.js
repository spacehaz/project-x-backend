module.exports = (value, maxPrice) => {
  if (!value) { return [] }
  const [ min, max ] = value.split('__')
  const percentage = maxPrice / 100
  return {
    min: percentage * min, max: percentage * max
  }
}
