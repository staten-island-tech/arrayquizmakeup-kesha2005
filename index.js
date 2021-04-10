const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
console.log(books)
//Sort books from oldest to most recent

books.sort((a, b) => {
      return a.publishDate - b.publishDate;
}) 
console.log(books)

//sort books alphabetically

const sorted = titles.sort();
console.log(sorted);

//Find who wrote War and Peace. 
const WarandPeace = books.filter(
  (books) => books.name === "War and Peace")
console.log(WarandPeace)

//how many books were written before 1900? 4 Books were written
const BooksBefore1900 = books.filter(
  (books) => books.publishDate<"1900") 

console.log(BooksBefore1900)

//was there at least one book published within the last 100 years? Yes there was and I brought up all that were.
  const BooksAfter1920 = books.filter(
    (books) => books.publishDate<"1920") 

  console.log(BooksAfter1920)
  
//was every book published within the last 100 years? No I showed which were though Mr.Whalen

const Last100Years = books.filter(
  (books) => books.publishDate<"1920") 

console.log(Last100Years)
