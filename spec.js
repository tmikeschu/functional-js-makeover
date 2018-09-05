const test = require("tape")
const {
  groupByAuthor,
  wherePropEq,
  lowerTitles,
  lowerTitlesInYear,
  withAuthorInitials,
} = require("./index")
const books = require("./books.json")

test("booksInYear filters an array of books by year", t => {
  t.plan(1)
  const whereYear = wherePropEq("year")
  const in96 = whereYear(1996)
  const actual = in96(books)
  const expected = [
    { title: "Infinite Jest", author: "David Foster Wallace", year: 1996 },
    { title: "Fight Club", author: "Chuck Palahniuk", year: 1996 },
  ]
  t.same(actual, expected)
})

test("lowerTitles returns a list of all the book titles in lower case", t => {
  t.plan(1)
  const actual = lowerTitles(books.slice(2, 5))
  const expected = ["the goldfinch", "infinite jest", "fight club"]
  t.same(actual, expected)
})

test("lowerTitlesInYear returns lowerTitles filtered by year", t => {
  t.plan(1)
  const lowerTitlesIn2013 = lowerTitlesInYear(2013)
  const actual = lowerTitlesIn2013(books.slice(2, 5))
  const expected = ["the goldfinch"]
  t.same(actual, expected)
})

test("withAuthorInitials returns the array of books with the author name converted to their initials.", t => {
  t.plan(1)
  const actual = withAuthorInitials(books.slice(3, 6))
  const expected = [
    {
      title: "Infinite Jest",
      author: "DFW",
      year: 1996,
    },
    {
      title: "Fight Club",
      author: "CP",
      year: 1996,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "JKR",
      year: 1997,
    },
  ]

  t.same(actual, expected)
})

test("groupByAuthor returns an object of author names pointing to book arrays", t => {
  t.plan(1)
  const actual = groupByAuthor(books.slice(0, 4))
  const expected = {
    "Donna Tartt": [
      {
        title: "The Secret History",
        year: 1992,
      },
      {
        title: "The Little Friend",
        year: 2002,
      },
      {
        title: "The Goldfinch",
        year: 2013,
      },
    ],
    "David Foster Wallace": [
      {
        title: "Infinite Jest",
        year: 1996,
      },
    ],
  }

  t.same(actual, expected)
})
