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
  	
  -- CATALÀ --
  -- EXERCICI DE REPÀS TEMA 1 I TEMA 2 ENUNCIAT:
Imagineu que esteu construint un sistema únic per gestionar la biblioteca literària d'una escola molt especial.
A partir d'un conjunt de llibres representats com a objectes amb propietats com ara title (títol), author (autor), genre (gènere), yearPublished (any de Publicacion) i available (que indica si està disponible).
Les dades d'aquests llibres ens les faciliten en un Array a la constant library.
Se'ns demana:

 * 1.- Món dels Llibres Encantats:
  Dissenya una classe que anomenarem "magicBook" amb un constructor màgic que, en ser invocat, a part de totes les propietats anteriorment esmentades dels llibres (title, author, genre, yearPublished i available)
  afegeixi automàticament un segell místic a cada nou llibre en una nova propietat anomenada "magicSeal"; el valor d'aquesta propietat s'ha d'obtenir cridant a un mètode de classe estàtic definit a la mateixa classe que anomenarem
  "generateMagicSeal" el qual rebrà dos paràmetres: el títol i l'autor, a partir d'aquests paràmetres, el mètode pren les dues primeres lletres del títol i, a continuació, les dues últimes de l'autor, les combina, les converteix
  a majúscules i afegeix "MAGIC" al final de la cadena, amb aquest valor hem de definir la propietat magicSeal al constructor.
  
  D'altra banda, defineix un mètode d'instància anomenat toggleAvailability que modifiqui màgicament la propietat "available" de l'objecte de manera que si està definida com true la canvii a false i viceversa en invocar aquest mètode.
  
  NOTA: Utilitza la "paraula màgica" this als teus encanteris dins de la classe magicBook.

 * 2.- map() L'Encantador: Crea un encanteri usant el mètode map() per transformar els llibres continguts en la constant "library" a llibres llegibles només per mags, de manera que en una constant que anomenarem "mysticalBooks"
  emmagatzemem només un Array amb els valors de les propietats magicSeal de nous llibres màgics generats a partir de la informació continguda a la constant "library".
  NOTA: Fletxes Encantades: Utilitza fletxes encantades (Arrow functions) als teus conjurs per realitzar accions més ràpides i precises dins del teu mètode map().

 * 3.- filter() el Cercador de Somnis : Utilitza una vareta especial (mètode filter()) per obtenir només els llibres de la constant "library" de la categoria "Fantasy" i que hagin estat publicats després de 1950. Els resultats d'aquest filtre màgic els
  emmagatzemarem a la constant "fantasyBooksAfter1950".
  NOTA: Fletxes Encantades: Utilitza fletxes encantades (Arrow functions) als teus conjurs per realitzar accions més ràpides i precises dins del teu mètode filter().

 * 4.- Invocant a l'oracle Recursiu: Invoca a l'oracle amb una funció recursiva, a la qual anomenarem "recursiveOracle" que predigui la quantitat total de llibres disponibles a la biblioteca. Aquesta funció s'ha de cridar a si mateixa passant-se com a paràmetres
  l'Array de llibres que està emmagatzemat a la constant "library" i un valor amb l'índex de l'últim llibre que ha comprovat la funció si està disponible o no. L'objectiu és que la funció comprovi un llibre, i, si està disponible, incrementeu el comptador
  de llibres disponibles i es torni a trucar a si mateixa rebent l'Array original de la biblioteca i la posició següent del llibre a comprovar, per, finalment, i un cop recorregut tot l'Array, tornar el total de llibres disponibles.

 * 5.- El Místic Refugi de Funcions: Dissenya un refugi místic on una funció exterior anomenada compareBooks() que rebi un Array de llibres (per exemple la constant "library") invoqui diversos esperits al seu interior:
  La primera invocació serà una altra funció definida al seu interior anomenada findMostRecentBook() que retorna el llibre la publicació del qual és la més recent en el temps de tots els rebuts.
  La segona invocació serà una altra funció definida al seu interior anomenada findLongestTitleBook() que retorna el llibre el títol del qual és el més llarg de tots els rebuts.
  La funció compareBooks, ens tornarà, després d'invocar els seus esperits interiors, un Array amb dos elements: al primer el llibre la publicació del qual és la més recent en el temps de tots els rebuts,
  i en el segon el llibre el títol del qual és el més llarg de tots els rebuts.

 * 6.- Encantament Temporal de Llibres: Dissenya un encanteri màgic (una funció anomenada earliestPublication) que accepti un nombre indeterminat de llibres (mitjançant l'ús de paràmetres rest) i retorni el llibre que va ser publicat abans en el temps.
  Aquest encanteri haurà de ser capaç de comparar les dates de publicació dels llibres i retornar el llibre amb el llançament més antic.

 * 7.- Encanteri de Duplicació spread: Utilitza un encanteri de duplicació (mitjançant l'Operador spread...) per clonar l'inventari de llibres (definit a la constant library) en una nova constant anomenada clonedLibrary i conjura un nou llibre
  i afegeix-lo a la nova biblioteca que tens a la nova constant.

 * 8.- Rituals de Serialització: Desenvolupa un ritual de serialització (function invokeSerialization) que rebi un llibre de la llibreria (definit a la constant "library") i el converteixi en un pergamí llegible per qualsevol ésser en el regne digital
  emmagatzemant-lo en una nova constant anomenada serializedBook.

Assegureu-vos que cada encanteri estigui documentat i que els resultats siguin tan màgics com s'espera en aquest món literari encantat. Que la màgia et guiï!

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

/********************* EX2 */

/********************* EX3 */

/********************* EX4 */

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