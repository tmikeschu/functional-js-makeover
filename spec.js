const test = require("tape")
const { booksInYear } = require("./index")

const books = [
  { title: "To Kill A Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Secret History", author: "Donna Tartt", year: 1992 },
  { title: "Infinite Jest", author: "David Foster Wallace", year: 1996 },
  { title: "Fight Club", author: "Chuck Palahniuk", year: 1996 },
]

test("booksInYear filters an array of books by year", t => {
  t.plan(1)
  const actual = booksInYear(books, 1996)
  const expected = [
    { title: "Infinite Jest", author: "David Foster Wallace", year: 1996 },
    { title: "Fight Club", author: "Chuck Palahniuk", year: 1996 },
  ]
  t.same(actual, expected)
})
