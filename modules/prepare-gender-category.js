const questions = require('../configs/questions.js')

module.exports = ({ keywords }) => {
  if (keywords.length === 1) {
    return keywords
  }
  if (keywords[0] === 'MALE') {
    if (keywords[1] === 'FEMALE') { return ['MALE'] }
    if (keywords[1] === 'MALE') { return ['GAY'] }
  }
  if (keywords[0] === 'FEMALE') {
    if (keywords[1] === 'FEMALE') { return ['LESBIAN'] }
    if (keywords[1] === 'MALE') { return ['FEMALE'] }
  }
  return keywords
}