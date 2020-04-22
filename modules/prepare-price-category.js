const questions = require('../configs/questions.js')

module.exports = ({ keywords, maxPrice }) => {
  if (keywords.length === 0) { return [] }
  const price = keywords[0]
  const [ min, max ] = price.split('__')
  const percentage = maxPrice / 100
  return [
    percentage * min, percentage * max
  ]
}
