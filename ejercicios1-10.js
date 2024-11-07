/* 1. Encuentra el Número Mayor
Objetivo: Crea una función que tome dos números como argumentos y devuelva el número mayor.
Pistas: Usa una estructura condicional if...else para comparar los números. */

function numeroMayor(a,b){
  if(a == b){
    return 0;
  } else if (a > b){
    return a;
  } else {
    return b;
  }; 
};

let resultado = numeroMayor(200,20);
resultado == 0 ? console.log("numeros son iguales") : console.log(`${resultado} es el numero Mayor`);


/* 2. Cuenta Hasta 10
Objetivo: Escribe un bucle que imprima los números del 1 al 10 en la consola.
Pistas: Usa un bucle for o while y la función console.log() para imprimir cada número. */

for (let i = 1; i <= 10; i++){
  console.log(i);
};


/* 3. Suma de Elementos en un Array
Objetivo: Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
Pistas: Usa un bucle for o el método forEach.*/

let numeros = [1,2,3,4,5];

function sumaNumeros(datas){
  let suma = 0;  
  datas.forEach((data) => {
    suma = suma + data; //alternativa: suma += data
  });  
  return suma;
};

sumaNumeros(numeros);


/* 4. Inversión de una Cadena
Objetivo: Crea una función que tome una cadena como argumento y devuelva la cadena al revés.
Pistas: Usa el método .split('') para convertir la cadena en un array, .reverse() para invertirlo y .join('') para unirlo de nuevo. */

let data = "Hola Mundo";

function invertirCadena(data){
  let arrayData = Array.from(data);  //convierte una cadena a un array de caracteres
  let arrayReverse = arrayData.reverse(); //invierte el orden del array de caracteres
  return arrayReverse.join(""); //concadena el array de caracteres
  
  //alternativa: return Array.from(data).reverse().join("");
  //alternativa2: return data.split("").reverse().join("");
};

console.log(invertirCadena(data));


/* 5. Números Pares en un Rango
Objetivo: Crea una función que reciba dos números y devuelva un array con todos los números pares entre ellos, inclusive.
Pistas: Usa un bucle for y una condición if para identificar los números pares. */

function buscaPares(num1,num2){
  let numerosPares = [];
  let menor = 0;
  let mayor =0;
  
  if (num1 > num2){
    mayor = num1;
    menor = num2;
  } else if (num2 > num1){
    mayor = num2;
    menor = num1;
  } else {
    return 0;
  };
  
  for (let i = menor; i <= mayor; i++){
    if (i % 2 === 0){
      numerosPares.push(i);      
    };    
  };
  return numerosPares;  
};

let resultado = buscaPares(20,10);
resultado === 0 ? console.log("numeros son iguales") : console.log(resultado);


/* 6. Encuentra los Elementos Únicos
Objetivo: Crea una función que reciba dos arrays y devuelva un nuevo array que contenga solo los elementos únicos de ambos arrays (sin duplicados).
Ejemplo: elementosUnicos([1, 2, 3], [2, 3, 4]) debería devolver [1, 4].
Pistas: Usa filter y includes para detectar los elementos únicos. */

function elementosUnicos(datos1, datos2){
  let numUnicos = []; 
   for (let dato of datos1){
      if (datos2.includes(dato) == false){
       numUnicos.push(dato);
      };
    };
    for (let dato of datos2){
      if (datos1.includes(dato) == false){
       numUnicos.push(dato);
      };
    };
  return (numUnicos);
};

elementosUnicos([1, 2, 3], [2, 3, 4, 5]);


/* 7. Palíndromo
Objetivo: Crea una función que tome una cadena y devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda) y false si no lo es.
Ejemplo: esPalindromo("radar") debería devolver true, y esPalindromo("hola") debería devolver false.
Pistas: Convierte la cadena en minúsculas, usa split, reverse y join. */

function esPalindromo(data){
  let cadena = Array.from(data);
  // let cadena = data.split("") //Alternativa
  console.log(cadena);
  let cadenaReverse = cadena.reverse();
  if (data === cadenaReverse.join("")){
    return true
  } else {
    return false
  };  
};

esPalindromo("anilina");


/* 8. Filtrar Números Pares y Ordenarlos
Objetivo: Crea una función que reciba un array de números y devuelva un array con solo los números pares, ordenados de menor a mayor.
Ejemplo: filtraYOrdena([5, 3, 2, 8, 1, 4]) debería devolver [2, 4, 8].
Pistas: Usa filter para filtrar los pares y sort para ordenarlos. */

function paresOrdenados(numeros){
  let newNumeros = [];
  for (let numero of numeros){
    if ( numero % 2 === 0){
      newNumeros.push(numero);
    };
  };
  return newNumeros.sort((a, b) => a - b)
};

paresOrdenados([5, 3, 2, 8, 1, 4]);


/* 9. Cuenta la Frecuencia de Palabras
Objetivo: Crea una función que reciba una cadena y devuelva un objeto con la frecuencia de cada palabra en la cadena.
Ejemplo: frecuenciaPalabras("hola hola mundo") debería devolver { hola: 2, mundo: 1 }.
Pistas: Usa .split(' ') para separar palabras y un objeto para llevar la cuenta.*/

function frecuenciaPalabra(data){  
  let palabras = data.split(" ");
  let frecuencia = {};
  for (let palabra of palabras){
    if (frecuencia[palabra]) {
        frecuencia[palabra] += 1;
    } else {
        frecuencia[palabra] = 1;
    };    
  };
  return (frecuencia);
};

frecuenciaPalabra("hola hola mundo")


/* 10. Fibonacci Recursivo
Objetivo: Crea una función recursiva que devuelva el n-ésimo número de Fibonacci.
Ejemplo: fibonacci(5) debería devolver 5 (la serie de Fibonacci es 0, 1, 1, 2, 3, 5, 8,...).
Pistas: La función fibonacci(n) es igual a fibonacci(n - 1) + fibonacci(n - 2), y los casos base son fibonacci(0) = 0 y fibonacci(1) = 1.*/

function fibonacci(data){
  let num = [0, 1];
  for ( let i=1; i<data; i++){
    num.push(num[num.length-1] + num[num.length-2]);
  };
  return (num[num.length-1])
};

fibonacci(6);

