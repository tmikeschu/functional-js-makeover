const test = require("tape")
const { whereYear } = require("./index")

const books = [
  {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    year: 1992,
  },
  {
    title: "Infinite Jest",
    author: "David Foster Wallace",
    year: 1996,
  },
  {
    title: "Fight Club",
    author: "Chuck Palahniuk",
    year: 1996,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
]

test("booksInYear filters an array of books by year", t => {
  t.plan(1)
  const in96 = whereYear(1996)
  const actual = in96(books)
  const expected = [
    { title: "Infinite Jest", author: "David Foster Wallace", year: 1996 },
    { title: "Fight Club", author: "Chuck Palahniuk", year: 1996 },
  ]
  t.same(actual, expected)
})
