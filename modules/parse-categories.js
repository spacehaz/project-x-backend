const prepareGenderCategory = require('./prepare-gender-category')
const prepareMaterialCategory = require('./prepare-material-category')
const prepareExtraCategory = require('./prepare-extra-category')
const prepareExperienceCategory = require('./prepare-experience-category')
const prepareTypeCategory = require('./prepare-type-category')
const prepareSizeCategory = require('./prepare-size-category')
const prepareControlCategory = require('./prepare-control-category')
const preparePriceCategory = require('./prepare-price-category')

module.exports = ({ categories, maxPrice }) => {
  const initialSum = Object.keys(CATEGORIES).reduce((sum, category) => {
    sum[category] = []
    return sum
  }, {})
  const categoriesGroups = categories.reduce((sum, item, idx) => {
    const [ category, value ] = item.split(':')
    sum[category] = [...sum[category], value]
    return sum
  }, initialSum)
  return Object.keys(categoriesGroups).reduce((sum, category) => {
    sum[category] = CATEGORIES[category]({ keywords: categoriesGroups[category], maxPrice })
    return sum
  }, {})
}




const CATEGORIES = {
  'GENDER': prepareGenderCategory,
  'MATERIAL': prepareMaterialCategory,
  'EXTRA': prepareExtraCategory,
  'EXPERIENCE': prepareExperienceCategory,
  'TYPE': prepareTypeCategory,
  'SIZE': prepareSizeCategory,
  'CONTROL': prepareControlCategory,
  'PRICE': preparePriceCategory
}

