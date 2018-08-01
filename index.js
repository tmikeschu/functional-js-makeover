const { filter, equals, prop, propEq, pipe } = require("ramda")

const wherePropEq = propName =>
  pipe(
    propEq(propName),
    filter
  )

module.exports = {
  wherePropEq,
}
