const {
  append,
  apply,
  defaultTo,
  equals,
  evolve,
  filter,
  join,
  map,
  match,
  merge,
  of,
  pipe,
  prop,
  propEq,
  reduce,
  split,
  toLower,
} = require("ramda")

const groupByAuthor = reduce(
  (acc, { author, ...el }) =>
    merge(acc, { [author]: [...defaultTo([], acc[author]), el] }),
  {}
)

const lowerTitles = map(
  pipe(
    prop("title"),
    toLower
  )
)

const wherePropEq = propName =>
  pipe(
    propEq(propName),
    filter
  )

const lowerTitlesInYear = year =>
  pipe(
    wherePropEq("year")(year),
    lowerTitles
  )

const getCapitals = match(/[A-Z]/g)
const withAuthorInitials = map(
  evolve({
    author: pipe(
      getCapitals,
      join("")
    ),
  })
)

module.exports = {
  groupByAuthor,
  lowerTitles,
  lowerTitlesInYear,
  wherePropEq,
  withAuthorInitials,
}
