// Ejercicios de Repaso / Exercicis de Repàs
// TEMA_1 & TEMA_2
/** 
  -- CASTELLANO
  -- EJERCICIO DE REPASO TEMA 1 Y TEMA 2 ENUNCIADO: 
Imagina que estás construyendo un sistema único para gestionar la biblioteca literaria de una escuela muy especial. 
A partir de un conjunto de libros representados como objetos con propiedades como title (titulo), author (autor), genre (genero), yearPublished (año de Publicacion) y available (que indica si está disponible). 
Los datos de estos libros nos los facilitan en un Array en la constante library. 
Se nos pide:

 * 1.- Mundo de los Libros Encantados: 
  Diseña una clase a la que denominaremos "magicBook" con un constructor mágico que, al ser invocado, a parte de todas las propiedades anteriormente mencionadas de los libros (title, author, genre, yearPublished y available)
  añada automáticamente un sello místico a cada nuevo libro en una nueva propiedad llamada "magicSeal"; el valor de esta propiedad se debe obtener llamando a un método de clase estático definido en la misma clase que llamaremos
  "generateMagicSeal" el cual recibirá dos parámetros: el título y el autor, a partir de estos parámetros, el método toma las primeras dos letras del título y, a continuación, las dos últimas del autor, las combina, las convierte 
  a mayúsculas y agrega "MAGIC" al final de la cadena, con este valor debemos definir la propiedad magicSeal en el constructor.
  
  Por otro lado, define un método de instancia denominado toggleAvailability que modifique mágicamente la propiedad "available" del objeto de manera que si está definida como true la ponga en false y viceversa al invocar este método.
  
  NOTA: Utiliza la "palabra mágica" this en tus hechizos dentro de la clase magicBook.

 * 2.- map() El Encantador: Crea un hechizo usando el método map() para transformar los libros contenidos en la constante "library" a libros legibles solo por magos, de manera que en una constante a la que llamaremos "mysticalBooks" 
  almacenemos solamente un Array con los valores de las propiedades magicSeal de nuevos libros mágicos generados a partir de la información contenida en la constante "library".
  NOTA: Flechas Encantadas: Utiliza flechas encantadas (Arrow functions) en tus conjuros para realizar acciones más rápidas y precisas dentro de tu método map().

 * 3.- filter() el Buscador de Sueños : Utiliza una varita especial (método filter()) para obtener solo los libros de la constante "library" de la categoría "Fantasy" y que hayan sido publicados después de 1950. Los resultados de este filtro mágico los 
  almacenaremos en la constante "fantasyBooksAfter1950".
  NOTA: Flechas Encantadas: Utiliza flechas encantadas (Arrow functions) en tus conjuros para realizar acciones más rápidas y precisas dentro de tu método filter().

 * 4.- Llamando al Oráculo Recursivo: Invoca al oráculo con una función recursiva, a la que llamaremos "recursiveOracle" que prediga la cantidad total de libros disponibles en la biblioteca. Esta función se debe llamar a sí misma pasándose como parámetros
  el Array de libros que está alamacenado en la constante "library" y un valor con el índice del último libro que ha comprobado la función si está disponible o no. El objetivo es que la función compruebe un libro, y, si está disponible incremente el contador
  de libros disponibles y se vuelva a llamar a sí misma recibiendo el Array original de la biblioteca y la posición siguiente del libro a comprobar, para, finalmente, y una vez recorrido todo el Array,devolver el total de libros disponibles.

 * 5.- El Místico Refugio de Funciones: Diseña un refugio místico donde una función exterior llamada compareBooks() que reciba un Array de libros (por ejemplo la constante "library") invoque a diversos espíritus en su interior:
  La primera invocación será otra función definida en su interior llamada findMostRecentBook() que devuelve el libro cuya publicación es la más reciente en el tiempo de todos los recibidos.
  La segunda invocación será otra función definida en su interior llamada findLongestTitleBook() que devuelve el libro cuyo título es el más largo de todos los recibidos.
  La función compareBooks, nos devolverá, después de invocar a sus espíritus interiores, un Array con dos elementos: en el primero el libro cuya publicación es la más reciente en el tiempo de todos los recibidos, 
  y en el segundo el libro cuyo título es el más largo de todos los recibidos.

 * 6.- Encantamiento Temporal de Libros: Diseña un hechizo mágico (una función llamada earliestPublication) que acepte un número indeterminado de libros (mediante el uso de parámetros rest) y devuelva el libro que fue publicado antes en el tiempo. 
  Este hechizo deberá ser capaz de comparar las fechas de publicación de los libros y revelar el libro cuyo lanzamiento fue más antiguo.

 * 7.- Hechizo de Duplicación spread: Utiliza un hechizo de duplicación (mediante el Operador spread ...) para clonar el inventario de libros (definido en la constante library) en una nueva constante llamada clonedLibrary y conjura un nuevo libro 
  y añádelo a la nueva biblioteca que tienes en la nueva constante.

 * 8.- Rituales de Serialización: Desarrolla un ritual de serialización (function invokeSerialization) que reciba un libro de la librería(definido en la constante "library") y lo convierta en un pergamino legible por cualquier ser en el reino digital 
  almacenándolo en una nueva constante denominada serializedBook .

Asegúrate de que cada hechizo esté documentado y que los resultados sean tan mágicos como se espera en este mundo literario encantado. ¡Que la magia te guíe!
*/
const library = [
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Fiction", yearPublished: 1967, available: true },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", yearPublished: 1954, available: false },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", yearPublished: 1960, available: true },
  { title: "1984", author: "George Orwell", genre: "Dystopian", yearPublished: 1949, available: true },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", yearPublished: 1925, available: false },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming of Age", yearPublished: 1951, available: true },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", yearPublished: 1997, available: true },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", yearPublished: 1932, available: false },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", yearPublished: 1937, available: true },
  { title: "The Odyssey", author: "Homer", genre: "Epic", yearPublished: -800, available: true },
];

//Escribe aquí tu solución / escriviu aquí la vostra solució:
/********************* EX1 */
class magicBook {
  constructor(title, author, genre, yearPublished, available) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.yearPublished = yearPublished;
    this.available = available;
    this.magicSeal = magicBook.generateMagicSeal(this.title, this.author);
  }
  // Método estático para generar el sello místico
  static generateMagicSeal(title, author) {
    const titlePart = title.substring(0, 2);
    const authorPart = author.substring(author.length - 2);
    return (titlePart + authorPart).toUpperCase() + "MAGIC";
  }
  // Metodo para cambiar disponibilidad
  toggleAvailability(){
    this.available=!this.available;
  }
}
/********************* EX2 */
// Extrae los nombres mágicos asignados
const mysticalBooks=library.map(book=>{
  const newMagicBook=new magicBook(
    book.title,
    book.author,
    book.genre,
    book.yearPublished,
    book.available
  );
  return newMagicBook.magicSeal;
});
console.log("EX2 - ",mysticalBooks);
/********************* EX3 */
//Extrae los libros de genero Fantasy y publicados > 1950 
const fantasyBooksAfter1950 = library.filter(
  book=>book.genre == "Fantasy" && book.yearPublished>1950
)
console.log("EX3 - ",fantasyBooksAfter1950);
/********************* EX4 */
// REcorre recursivamente library
function recursiveOracle(books, index = 0) {
    if (index >= books.length) {
        return 0;
    }
    const isAvailable = books[index].available ? 1 : 0;
    return isAvailable + recursiveOracle(books, index + 1);
}

const totalAvailableBooks = recursiveOracle(library);
console.log("EX4 - Libros disponibles:", totalAvailableBooks); 

/********************* EX5 */

/********************* EX6 */

/********************* EX7 */

/********************* EX8 */

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [new magicBook(library[2].title, library[2].author, library[2].genre, library[2].yearPublished, library[2].available), mysticalBooks, fantasyBooksAfter1950, recursiveOracle(library), compareBooks(library), earliestPublication(library[3], library[9], library[0]), clonedLibrary,serializedBook];
}