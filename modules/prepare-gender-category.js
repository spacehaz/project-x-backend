const questions = require('../configs/questions.js')

module.exports = ({ keywords }) => {
  if (keywords.length === 1) {
    return keywords
  }
  if (keywords[0] === 'MALE') {
    if (keywords[1] === 'FEMALE') { return [] }
    if (keywords[1] === 'MALE') { return ['GAY'] }
    if (keywords[1] === 'FEMALE_MALE') { return ['GAY'] }
  }
  if (keywords[0] === 'FEMALE') {
    if (keywords[1] === 'FEMALE') { return ['LESBIAN'] }
    if (keywords[1] === 'MALE') { return [] }
    if (keywords[1] === 'FEMALE_MALE') { return ['LESBIAN'] }
  }
  if (keywords[0] === 'FEMALE_MALE') {
    if (keywords[1] === 'FEMALE') { return ['LESBIAN'] }
    if (keywords[1] === 'MALE') { return ['GAY'] }
    if (keywords[1] === 'FEMALE_MALE') { return ['GAY_LESBIAN'] }
  }
  return keywords
}