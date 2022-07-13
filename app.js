/*------------------------------------------------------------------------
 ----------------**Iteración #1: Variables--------------------------------
 -----------------------------------------------------------------------*/

let myFavoriteHero="Hulk"
let x = 50;
let h = 5, y=10;
let z = h + y;

/*-----------------------------------------------------------------------
----------------**Iteración #2: varibles avanzadas**---------------------
-----------------------------------------------------------------------*/

//Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = { name: 'Jack Sparrow', age: 10};
console.log(character);
character.age = 25;
console.log(character);


//Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
let firstName = "Jon";
let lastName = "Snow";
let age = 24;
//Muestralos por consola de esta forma:'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log("soy " + firstName + " " + lastName + ",tengo " + age + " años y me gustan los lobos");

console.log(`soy ${firstName} ${lastName}, tengo ${age} años y me gust
an los lobos`);

//Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.

const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };

console.log("Total Price", toy1.price + toy2.price);

/*Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
basePrice más el valor de la variable globalBasePrice.*/

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

console.log(car1);
console.log(car2);

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
console.log("MODIFICADO", car1);


car2.finalPrice = car2.basePrice + globalBasePrice;
console.log("MODIFICADO", car2);


/*-----------------------------------------------------------------------
----------------**Iteración #3: Arrays**----------------------------------
-----------------------------------------------------------------------*/


// Multiplica 10 por 5 y muestra el resultado mediante console.log.

let multiplicar = 10*5;
console.log("Resultado de multiplicar: " +multiplicar);

// Divide 10 por 2 y muestra el resultado en un console.log.

let division = (10/2);
console.log("Resultado de la division: "+division);

// Muestra mediante un console.log el resto de dividir 15 por 9

let resto= 15%9;
console.log("El resto es: " +resto);

// Usa el correcto operador de asignación que resultará en o = 15,
// teniendo dos variables p = 10 y j = 5.

let p=10, j=5, o= p+j;
console.log("o vale el valor: "+o);

// Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.

let c = 10, m=5, i= c*m;
console.log("I vale: "+i );


/*-----------------------------------------------------------------------
----------------------**Iteración #4: Operadores**-----------------------
-----------------------------------------------------------------------*/


// Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avergers= ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const nameAvegers =  avergers[0];

// Cambiar el valor del 1 avenger a ironman
avergers [0]="Iroman";
console.log(nameAvegers);

//console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avergers.length);

// Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log("tradicional", rickAndMortyCharacters[4]);

console.log("Version  alberto", rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharactersDos = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersDos.pop();
console.log( rickAndMortyCharactersDos [0]+ "  "+rickAndMortyCharactersDos [rickAndMortyCharactersDos.length-1]);

console.log(rickAndMortyCharactersDos.shift())
console.log(rickAndMortyCharactersDos.shift())


//Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharactersTres = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersTres.splice(1,1);
console.log(rickAndMortyCharactersTres);

/*-----------------------------------------------------------------------
---------------------**Iteración #5: Condicionales**---------------------
-----------------------------------------------------------------------*/

const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if ((number2/number1) ==2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1!==number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3!=number1) {
  console.log("number3 es distinto number1");
}

if ((number3*5)==number1) {
  console.log("number3 por 5 es igual a number1");
}

if (((number3 * 5)==number1) && ((number1*2)==number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (((number2/2)== number1) || ((number1/5)== number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

/*-----------------------------------------------------------------------
---------------------**Iteración #6: Bucles**---------------------------
-----------------------------------------------------------------------*/

//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let x=0; x<10; x++){
    console.log(x)
}


console.log("esto ya es otro")
//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (let x=0; x<10; x++){
    if(x%2==0){
        console.log(x)

    }
}


//Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle empieza en 0 y termina en 10. 
//Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
//y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let x=0; x<11;x++){
    if(x==10){
        console.log("Dormido!");
    } else {
        console.log("Intentando dormir, vuelta numero: "+(x+1));
    }
}















