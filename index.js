const filter = predicate => xs => xs.filter(predicate)
const equals = a => b => a === b
const prop = propName => obj => obj[propName]

const whereYear = year => filter(item => equals(year)(prop("year")(item)))

module.exports = {
  whereYear,
}
