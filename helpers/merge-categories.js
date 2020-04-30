const mergeScheme = require('../configs/merge-scheme.js')

module.exports = ({ result }) => {
  let initialData = [...result]
  
  mergeScheme.forEach(({ category_1, category_2, output }) => {
    const findCategory1Index = findIndex({ category: category_1 })
    const category1 = initialData.findIndex(findCategory1Index)
    const findCategory2Index = findIndex({ category: category_2, skipIndex: category1 })
    const category2 = initialData.findIndex(findCategory2Index)
    if (category1 > -1 && category2 > -1) {
      const originalValues = {
        category1: null,
        category2: null
      }
      initialData = initialData
        .filter((group, idx) => {
          if (idx === category1) {
            originalValues.category1 = group
          } else if (idx === category2) {
            originalValues.category2 = group
          }
          return idx !== category1 && idx !== category2
        })
      initialData = initialData.concat(createMergedCategory({
        output,
        original_category_1: originalValues.category1,
        original_category_2: originalValues.category2
      }))
    }
    return
  })
  console.log({ initialData })
  return initialData
}

const findIndex = ({ category, skipIndex }) => {
  return (keyword, idx) => {
    if (!keyword) { return }
    if (idx === skipIndex) { return }
    const [ kind, value ] = keyword.split('::')
    if (category.value === '*') {
      return kind === category.kind
    }
    const [ _, realValue ] = value.split('_')
    return kind === category.kind && realValue === category.value
  }
}

const createMergedCategory = (merger) => {
  const { output } = merger
  if (!output.value) {
    return ''
  }
  if (typeof output.value === 'number') {
    const [ _, value ] = (merger[`original_category_${output.value}`]).split('::')
    return `${output.kind}::${value}`
  }
  return `${output.kind}::${output.weight}_${output.value}`
}