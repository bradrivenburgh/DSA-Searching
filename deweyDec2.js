/**
 * Imagine you are looking for a book in a library with a 
 * Dewey Decimal index. How would you go about it? Can you 
 * express this process as a search algorithm? Implement 
 * your algorithm to find a book whose Dewey and book 
 * title is provided.
 * 
Dewey Decimal System
Each subject is broken up into 10 smaller, more specific categories.

000 – Computer science, information, and general works
100 – Philosophy and psychology
200 – Religion
300 – Social sciences
400 – Language
500 – Science
600 – Technology
700 – Arts and recreation
800 – Literature
900 – History and geography

Each category is then divided into subseries separated by 10.
Further subdivisions extend to decimal numbers
 */

// category{3}.sub{2}+10 example 00,10,20..
// 000, 010, 020, 030
// 000 - 099.10,20

// 000.10 => book_title

const library = [
  {
    dewey_decimal: "000.001",
    title: "Computer Science Book"
  },
  {
    dewey_decimal: "100.001",
    title: "Philosophy Book"
  },
  {
    dewey_decimal: "200.001",
    title: "Religious Book"
  },
  {
    dewey_decimal: "300.001",
    title: "Social Sciences Book"
  },
  {
    dewey_decimal: "400.001",
    title: "Languages Book"
  },
  {
    dewey_decimal: "500.001",
    title: "Science Book"
  },
]

// const library = [
//   {
//     "000": {
//       "00": {
//         dewey_decimal: "000.001",
//         title: "Computer Science Book",
//       },
//     },
//   },
//   {
//     100: {
//       "00": {
//         dewey_decimal: "100.001",
//         title: "Psychology Book",
//       },
//     },
//   },
//   {
//     200: {
//       "00": {
//         dewey_decimal: "200.001",
//         title: "Religious Book",
//       },
//     },
//   },
//   {
//     300: {
//       "00": {
//         dewey_decimal: "300.001",
//         title: "Social Science Book",
//       },
//     },
//   },
//   {
//     400: {
//       "00": {
//         dewey_decimal: "400.001",
//         title: "Language Book",
//       },
//     },
//   },
// ];


/**
 * Return dewey decimal value of the given title.
 */
function deweyDec(catalog = [], bookDD = "", title = "", start = 0, end = catalog.length - 1) {
  if (!bookDD || !title) {
    return `Please provide a dewey decimal number and title`;
  }
  let givenNum = bookDD;

  if (start > end) {
    return `The book, "${title}" with dewey decimal number ${bookDD} is not in the library`;
  }
  const index = Math.floor((start + end) / 2);
  const item = catalog[index];
  let lookupNum = item.dewey_decimal;

  if (lookupNum === givenNum) {
    return `Found the book "${title}" with dewey decimal number ${bookDD}`;
  } else if (lookupNum < givenNum) {
    return deweyDec(catalog, bookDD, title, index + 1, end);
  } else if (lookupNum > givenNum) {
    return deweyDec(catalog, bookDD, title, start, index - 1);
  }

}

console.log(deweyDec(library, "000.001", "Computer Science Book"));
console.log(deweyDec(library, "", "Some Book"));
console.log(deweyDec(library, "101.001", "Some Book")); 