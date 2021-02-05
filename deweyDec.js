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
  '000':{
    'Computer science, information, and general works':{
      '000':{
        '01':{
          dewey_decimal:'000.001',
          title:'Some book'
        },
      },
      '010':{},
      '020':{},
      '030':{},
      '040':{},
      '050':{},
      '060':{},
      '070':{},
      '080':{},
      '090':{},
    }
  },
  '100':{},
  '200':{},
  '300':{},
  '400':{},
  '500':{},
  '600':{},
  '700':{},
  '800':{},
  '900':{},
 };

 /**
  * Return dewey decimal value of the given title.
  */
 function deweyDec(catalog = {}, bookDD = '', title = '') {
  // Divide book dewey decimal number by 10
  // to get the general category

  // D

 }

 deweyDec(library, '000.001', '');
 deweyDec(library, '', 'Some Book');