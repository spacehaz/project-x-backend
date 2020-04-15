const questions = require('../configs/questions.js')

// const answers = {
//   1:2,
//   2:3,
//   3:5,
//   6:11,
//   7:14,
//   8:22,
//   9:24,
//   10:27,
//   11:29,
//   12:30
// }
const getCategoriesFromAnswers = ({ answers }) => {
  const keywords = []
  questions.forEach(question => {
    if (answers[String(question.id)]) {
      const answer = question.answers.find(answer => Number(answer.id) === Number(answers[String(question.id)]))
      
      if (!answer.key) { return }
      keywords.push(answer.key) 
    }
  })
  if (!keywords.length) { return 'sex toy' }
  return keywords.join(' ')
}

// getCategoriesFromAnswers({ answers })

module.exports = getCategoriesFromAnswers
