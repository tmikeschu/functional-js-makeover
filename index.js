const booksInYear = (books, year) => {
  let matches = []

  for (book of books) {
    if (book.year === year) {
      matches.push(book)
    }
  }

  return matches
}

module.exports = {
  booksInYear,
}
