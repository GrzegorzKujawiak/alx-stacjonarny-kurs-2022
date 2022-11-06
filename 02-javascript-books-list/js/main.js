//console.log('Hello World!');

// const books = [
//   {
//     title: "Harry Potter i kamień filozoficzny",
//     author: "J.K. Rowling",
//     year: 1992,
//     price: 19.9
//   },
//   {
//     title: "Lord Of The Rings",
//     author: 'Tolkien',
//     year: 1980,
//     price: 29.9
//   },
//   {
//     title: 'God Father',
//     author: "Puzo",
//     year: 1960,
//     price: 89.9
//   }
// ]

// let sum = 0;
// books.forEach((book, index) => {
//   console.log(`${book.title} o indeksie ${index}`);
//   sum += book.price;
// })
// let average = sum / books.length;
// console.log(average)


// let newBookWithTitle = books.map(book =>{
//   return book.title;
// })
// console.log(newBookWithTitle);

// let newBooksWithPrices = books.map(book =>{
//   return book.price;
// })
// console.log(newBooksWithPrices);
// let sum = 0;
// newBooksWithPrices.forEach(price => {
//   sum += price;
// })
// let average = sum / newBooksWithPrices.length;
// console.log(average)

// let sum = 0;
// books
// .map(book =>{
//   return book.price;
// })
// .forEach(price => {
//   sum += price;
// })
// let average = sum / books.length;
// console.log(average)


// console.log('Hello World!');

// const books = [
//   {
//     title: "Harry Potter i kamień filozoficzny",
//     author: "J.K. Rowling",
//     year: 1992,
//     price: 49.99
//   },
//   {
//     title: "Lord Of The Rings",
//     author: 'Tolkien',
//     year: 1980,
//     price: 19.99
//   },
//   {
//     title: 'God Father',
//     author: "Puzo",
//     year: 1960,
//     price: 29.99
//   }
// ]

// Programowanie funkcyjne

// Sluzy do operacji na tablicach (w celu pisania aplikacji)

// Schemat pisania

// [].metoda((elementTablicy) => {
//    console.log(elementTablicy)
// })

// Kilka metod naraz

// []
//   .metoda((elementTablicy) => {
//      console.log(elementTablicy)
//   })
//   .metoda((elementTablicy) => {
//      console.log(elementTablicy)
//   })


// 1. forEach
// forEach sluzy do przechodzenia przez elementy i np. ich wyswietlenia na ekranie (lub w konsoli). Tez za pomoca forEach mozna liczyc sumy czy wykonywac obliczenia

// Wyswietlanie
// books.forEach((book, index) => {
//   console.log(`${book.title} o indeksie ${index}`);
// })

// Liczenie sredniej ceny za ksiazke
// let sum = 0;

// books.forEach((book) => {
//   sum += book.price
// });

// const average = sum / books.length
// console.log(average);


// 2. map

// map sluzy do tego, zeby kazdy element tablicy, zamienic na cos innego

// const newBooksWithOnlyTitles = books.map((book) => {
//   return book.title
// })

// console.log(books);
// console.log(newBooksWithOnlyTitles)

// const bookPrices = books.map((book) => {
//   return book.price // zredukowalem (zmniejszylem) tablice do tablicy zawierajaca tylko ceny jako number
// })

// let bookSum = 0;
// bookPrices.forEach((price) => {
//   bookSum += price;
// })
// console.log(bookSum / bookPrices.length);


// let bookSum = 0;

// books
//   .map((book) => {
//     return book.price;
//   })
//   .forEach((price) => {
//     bookSum += price;
//   })

// console.log(bookSum / books.length);


// Exercise 1.
// Za pomoca funkcji forEach wyswietl w konsoli authora kazdej ksiazki

// books.forEach(book => {
//   console.log(book.author);
// })
// Exercise 2.
// Za pomoca funkcji map, stworz tablice zawierajaca authorow ksiazek
// let authors = books.map(book => {
//   return book.author;
// })
// console.log(authors);
// Exercise 3.
// Za pomoca funkcji map, stworz tablice zawierajaca ile znakow maja authorzy ksiazek. Podpowiedz: metoda .length dziala rowniez na stringach
// let authorsLengths = books.map(book => {
//   return book.author.length;
// })
// console.log(authorsLengths);

// 3. find
// console.log(books.find(book => {
//   return book.author.includes('Puzo')
// }));

// Find sluzy do wyszukiwania pierwszego elementu z tablicy, ktory spelni dane kryterium

// 'Damian'.includes('Dam') => true
// 'Damian'.includes('am') => true
// 'Damian'.includes('Damian') => true
// 'Damian'.includes('pa') => false

// const puzoBook = books.find((book) => {
//   return book.author.includes('Puzo');
// })

// console.log(puzoBook)

// const oldBook = books.find((book) => {
//   return book.year < 1960;
// })

// jesli find nic nie znajdzie, to zwroci undefined
// console.log(oldBook)


// const BookBeforeMilenium = books.find((book) => {
//   return book.year < 2000;
// })

// console.log(BookBeforeMilenium)

// 4. filter

// Filter zwraca nowa tablice, zawierajaca elementy, ktore spelnia dane kryterium

// const booksBeforeEighties = books.filter((book) => {
//   return book.year <= 1980;
// })

// console.log(booksBeforeEighties)


// Exercise 4.
// Znajdz ksiazke, ktorej author to J.K Rowling

// console.log(books.find(book => book.author.includes('J.K. Rowling')))

// Exercise 5.
// Wyszukaj ksiazki, gdzie author na wiecej niz 4 znaki w swojej nazwie (uzyj .length)
// let authorsLengthMoreThen4 = books.filter(book => {
//   return book.author.length > 4
// })
// console.log(authorsLengthMoreThen4)
// Exercise 6.
// Oblicz sume cen ksiazek napisanych po 1970 roku
// let sumPricesAfter1970 = 0;
// books
// .filter(book => {
//   return book.year > 1970
// })
// .forEach(book => {
//   sumPricesAfter1970 += book.price
// })
// console.log(sumPricesAfter1970)

// 5.* sort
// const sortedBooks = books.sort((a, b) => {
//   return a.price - b.price ? -1 : 1;
// })
// console.log(sortedBooks)
// console.log(0.00001?'True':'False')
// 6.* reduce
// const sum = books.reduce((accumulator, book) => {
//   return accumulator+book.price;
// }, 0);
// console.log(sum)









