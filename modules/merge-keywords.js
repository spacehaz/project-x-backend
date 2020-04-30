const { DEFAULT_KEYWORDS } = require('../configs/config')
const { mergeCategories } = require('../helpers')


module.exports = ({ categories }) => {
  let result =  Object.keys(categories).filter(category => {
    return category !== 'PRICE'
  })
  .map(category => {
    // берем уникальные слова в одной категории

    if (['SIZE', 'EXPERIENCE'].indexOf(category) > -1) {
      return categories[category].map(value => `${category}::0_${value}`)
    }
    return categories[category].map(value => `${category}::1_${value}`)
  })
  result = [].concat.apply([], result)
  result = mergeCategories({ result })
  result = result.map(item => {
    return item.split('::')[1]
  }).filter(item => item)
  if (result.length === 1) {
    result.push(`1_${DEFAULT_KEYWORDS}`)
  }

  result = result.join(' ').trim().replace(/\s\s+/g, ' ')

  if (!result || result === '') {
    result = `1_${DEFAULT_KEYWORDS}`
  }
  return result
}
