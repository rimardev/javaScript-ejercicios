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
