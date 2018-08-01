const booksInYear = books => year => books.filter(book => book.year === year)

module.exports = {
  booksInYear,
}
