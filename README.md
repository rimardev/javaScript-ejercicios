# JavaScript-Ejercicios

1. Encuentra el Número Mayor
    - Objetivo: Crea una función que tome dos números como argumentos y devuelva el número mayor.
    - Pistas: Usa una estructura condicional if...else para comparar los números.

2. Cuenta Hasta 10
    - Objetivo: Escribe un bucle que imprima los números del 1 al 10 en la consola.
    - Pistas: Usa un bucle for o while y la función console.log() para imprimir cada número.

3. Suma de Elementos en un Array
    - Objetivo: Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
    - Pistas: Usa un bucle for o el método forEach.

4. Inversión de una Cadena
    - Objetivo: Crea una función que tome una cadena como argumento y devuelva la cadena al revés.
    - Pistas: Usa el método .split('') para convertir la cadena en un array, .reverse() para invertirlo y .join('') para unirlo de nuevo.

5. Números Pares en un Rango   
    - Objetivo: Crea una función que reciba dos números y devuelva un array con todos los números pares entre ellos, inclusive.
    - Pistas: Usa un bucle for y una condición if para identificar los números pares.

6. Encuentra los Elementos Únicos
    - Objetivo: Crea una función que reciba dos arrays y devuelva un nuevo array que contenga solo los elementos únicos de ambos arrays (sin duplicados).
    - Ejemplo: elementosUnicos([1, 2, 3], [2, 3, 4]) debería devolver [1, 4].
    - Pistas: Usa filter y includes para detectar los elementos únicos.

7. Palíndromo
    - Objetivo: Crea una función que tome una cadena y devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda) y false si no lo es.
    - Ejemplo: esPalindromo("radar") debería devolver true, y esPalindromo("hola") debería devolver false.
    - Pistas: Convierte la cadena en minúsculas, usa split, reverse y join.

8. Filtrar Números Pares y Ordenarlos
    - Objetivo: Crea una función que reciba un array de números y devuelva un array con solo los números pares, ordenados de menor a mayor.
    - Ejemplo: filtraYOrdena([5, 3, 2, 8, 1, 4]) debería devolver [2, 4, 8].
    - Pistas: Usa filter para filtrar los pares y sort para ordenarlos.

9. Cuenta la Frecuencia de Palabras
    - Objetivo: Crea una función que reciba una cadena y devuelva un objeto con la frecuencia de cada palabra en la cadena.
    - Ejemplo: frecuenciaPalabras("hola hola mundo") debería devolver { hola: 2, mundo: 1 }.
    - Pistas: Usa .split(' ') para separar palabras y un objeto para llevar la cuenta.

10. Fibonacci Recursivo
    - Objetivo: Crea una función recursiva que devuelva el n-ésimo número de Fibonacci.
    - Ejemplo: fibonacci(5) debería devolver 5 (la serie de Fibonacci es 0, 1, 1, 2, 3, 5, 8,...).
    - Pistas: La función fibonacci(n) es igual a fibonacci(n - 1) + fibonacci(n - 2), y los casos base son fibonacci(0) = 0 y fibonacci(1) = 1.
