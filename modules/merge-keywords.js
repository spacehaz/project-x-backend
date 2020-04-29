const { DEFAULT_KEYWORDS } = require('../configs/config')

module.exports = ({ categories }) => {
  let result =  Object.keys(categories).filter(category => {
    return category !== 'PRICE'
  })
  .map(category => {
    const values = Array.from(new Set(categories[category]))
    // берем уникальные слова в одной категории

    if (['SIZE', 'EXPERIENCE'].indexOf(category) > -1) {
      return values.map(value => `${category}::0_${value}`).join(' ')
    }
    return values.map(value => `${category}::1_${value}`).join(' ')
  })
  const type = result.findIndex(keyword => keyword.indexOf('TYPE::') > -1)
  const gender = result.findIndex(keyword => keyword.indexOf('GENDER::') > -1)
  if (type > -1 && gender > -1) {
    result = result.filter((group, idx) => idx !== gender)
  }

  result = result.map(group => {
    return group.split(' ').map(item => item.split('::')[1]).join(' ')
  }).filter(item => item)

  console.log({ result })

  if (result.length === 1) {
    result.push(`1_${DEFAULT_KEYWORDS}`)
  }

  result = result.join(' ').trim().replace(/\s\s+/g, ' ')

  if (!result || result === '') {
    result = `1_${DEFAULT_KEYWORDS}`
  }

  console.log({ finalresult: result })


  return result
}
