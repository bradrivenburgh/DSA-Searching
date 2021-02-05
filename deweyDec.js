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

const library = {
  "000": {
    "00": {
      dewey_decimal: "000.001",
      title: "Some book",
    },
  },
  "100": {
    "00": {
      dewey_decimal: "100.001",
      title: "Some book",
    },
  },
  "200": {
    "00": {
      dewey_decimal: "200.001",
      title: "Some book",
    },
  },
  "300": {
    "00": {
      dewey_decimal: "300.001",
      title: "Some book",
    },
  },
  "400": {
    "00": {
      dewey_decimal: "400.001",
      title: "Some book",
    },
  },
};

/*
  const binarySearch = (
    val,
    array ,
    start = 0,
    end = data.length,
    count = 0
  ) => {
    if (start > end) {
      return false;
    }
    
    count++;

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (start === end && item !== val) {
      setFinalCount(count);
      return false;
    }
    if (item === val) {
      setFinalCount(count);
      setFound(true);
      return true;
    } else if (item < val) {
      return binarySearch(val, array, index + 1, end, count);
    } else if (item > val) {
      return binarySearch(val, array, start, index - 1, count);
    }
  };

*/


/**
 * Return dewey decimal value of the given title.
 */
function deweyDec(catalog = {}, bookDD = "", title = "") {
  if (!bookDD) {
    return false;
  }
  let category = bookDD[0]+"00";
  let subcategory = bookDD[1]+bookDD[2];
  //let decimal = parseFloat(bookDD);

  if (catalog[category][subcategory].dewey_decimal === bookDD) {
    return true;
  }
}

deweyDec(library, "000.001", "");
console.log(deweyDec(library, "", "Some Book"));
