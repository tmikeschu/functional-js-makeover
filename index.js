const whereYear = year => books => books.filter(book => book.year === year)

module.exports = {
  whereYear,
}
