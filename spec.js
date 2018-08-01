const test = require("tape")
const { booksInYear } = require("./index")

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
  t.plan(2)
  const curriedBooks = booksInYear(books)
  const in96 = curriedBooks(1996)
  const in97 = curriedBooks(1997)
  const expected1 = [
    { title: "Infinite Jest", author: "David Foster Wallace", year: 1996 },
    { title: "Fight Club", author: "Chuck Palahniuk", year: 1996 },
  ]
  const expected2 = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
  ]
  t.same(in96, expected1)
  t.same(in97, expected2)
})
