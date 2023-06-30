//1.Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de indice 2 y 4
 
let j = [200, -100, 45, 78, 32];
console.log(j[2], j[4]); // Imprime: 45 32


//2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh.
 

let f = ["ab", "cd", "ef", "gh"];
console.log(f[1], f[3]); // Imprime: cd gh


//3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la operacion de recorrido con foreach

let aux = [10, true, "k200", 20.7];
aux.forEach(m => console.log(m));
// Imprime: 10 true "k200" 20.7


//4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e imprimir los elementos que sean números impares

let k = [17, 4, 64, 79, 109, 112];
k.forEach(ñ => {
  if (ñ % 2 !== 0) {
    console.log(ñ);
  }
});
// imprime: 17 79 109



//5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por true, cambiar el elemento de índice 3 por false. 

let h = [true, true, false, true, false];
h[2] = true;
h[3] = false;
console.log(h);
// imprime: [true, true, true, false, false]


//6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por true, cambiar el elemento "qr" por 30

let w = ["wc", "jp", "zx", "qr"];
w[1] = true;
w[3] = 30;
console.log(w);
// imprime: ["wc", true, "zx", 30]


//7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,imprimiendo cada uno de sus elementos.
 

function printArray(arr) {
  arr.forEach(z => console.log(z));
}

printArray([2, 5, 7, 9]);
// imprime: 2 5 7 9


//8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del arreglo.


function getArrayLength(arr) {
  return arr.length;
}

console.log(getArrayLength([2, 5, 7, 9])); // imprime: 4


//9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]


let arro = [30, 44, 54, 89, 100];
console.log(arro.indexOf(44)); // imprime: 1
console.log(arro.indexOf(89)); // imprime: 3
console.log(arro.indexOf(70)); // imprime: -1


//1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length a) [1,2,3,4,5,6,7,8,9,10] b) [] c) ["a", true, -1] d) [2, 4, 5, 7, 1, 34, 89, 0]
console.log([1,2,3,4,5,6,7,8,9,10].length); // imprime: 10
console.log([].length); // imprime: 0
console.log(["a", true, -1].length); // imprime: 3
console.log([2, 4, 5, 7, 1, 34, 89, 0].length); // imprime: 8


//2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
//a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo b) b) Agregue el
//elemento true usando push y verifique el cambio en el arreglo
//c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo d) Agregue los
//elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
//e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo

let arrz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrz.push(345);
console.log(arrz); // imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 345]

arrz.push(true);
console.log(arrz); // imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 345, true]

arrz.push("ADSO");
console.log(arrz); // imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 345, true, "ADSO"]

arrz.push(455, 78, false);
console.log(arrz); // imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 345, true, "ADSO", 455, 78, false]

arrz.push("ABcd", true, 21);
console.log(arrz); // imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 345, true, "ADSO", 455, 78, false, "ABcd", true, 21]


//3. Use splice para hacer las eliminaciones correspondientes:
//a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
//b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
//c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
//d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta elíndice 4 en un sólo llamado
//e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado

let arr1 = [1, 2, false];
arr1.splice(2, 1);
console.log(arr1); // imprime: [1, 2]

let arr2 = [99, false, 17, 45, 7, "abc", 78];
arr2.splice(6, 1);
console.log(arr2); // imprime: [99, false, 17, 45, 7, "abc"]

let arr3 = [-1, -55, -89, 30, 1000];
arr3.splice(1, 1);
console.log(arr3); // imprime: [-1, -89, 30, 1000]

let arr4 = ["zxc", 767, 1298, true, false, [3], 1];
arr4.splice(1, 4);
console.log(arr4); // imprime: ["zxc", [3], 1]

let arr5 = [34, ["q"], 67, 1, 99, 1/2];
arr5.splice(3, 2);
console.log(arr5); // imprime: [34, ["q"], 67, 1/2]


//4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
 

let a = [2, 6, 9, 0, 5];
let aCopy = a.slice();
console.log(aCopy); // imprime: [2, 6, 9, 0, 5]

//6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo 

let ar = ["x", "y", "z", 0, 1, 2, 3];
for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}
// imprime: x y z 0 1 2 3

//7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus el ementosaumentados en 1 


let az = [1, 17, 8, 9, 3];
for (let i = 0; i < az.length; i++) {
  console.log(az[i] + 1);
}
// imprime: 2 18 9 10 4


//8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)
function g(arr) {
  return arr.length;
}

console.log(g([4, 5, 6])); // imprime: 3


//9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
//elemento del siguiente arreglo
//["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema

function s(m, s) {
  for (let i = 0; i < s.length; i++) {
    if (m[i] === s) {
      return true;
    }
  }
  return false;
}

let alphabet = ["a", "b", "c", "d", "e", "f", "g"];
console.log(s("e", alphabet)); // imprime: true
console.log(s("h", alphabet)); // imprime: false


//Dado el arreglo [3, 50, 70, 600, 40]:
//1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos


let d = [3, 50, 70, 600, 40];
d.forEach(m => {
  console.log(m);
});
// imprime: 3 50 70 600 40


//2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3

let x = [3, 50, 70, 600, 40];
x.forEach(m => {
  console.log(m * 3);
});
// imprime: 9 150 210 1800 120


//3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos 

let arr = [3, 50, 70, 600, 40];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
// imprime: 3 50 70 600 40


//4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares

let t = [3, 50, 70, 600, 40];
for (let i = 0; i < t.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(t[i]);
  }
}
// imprime: 50 70 600 40


//5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
//mostrar si el nombre Juan se encuentra dentro del arreglo 


let xx = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
for (let i = 0; i < xx.length; i++) {
  if (xx[i] === "Juan") {
    console.log("Juan se encuentra en el arreglo.");
    break;
  }
}
// imprime: Juan se encuentra en el arreglo.


//6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
//y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
//en el arreglo) para mostrar cuántas veces aparece el nombre Maria

let l = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let c = 0;
for (let i = 0; i < l.length; i++) {
  if (l[i] === "Maria") {
    c++;
  }
}
console.log("Maria aparece " + c + " veces en el arreglo.");
// imprime: Maria aparece 2 veces en el arreglo.


//7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
//sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
//se implementa la variable contadora


let cool = [15, 7, 9, 12, 1];
let suma = 0;
cool.forEach(x => {
  suma += x;
});
console.log("La suma de los elementos del arreglo es: " + suma);
// imprime: La suma de los elementos del arreglo es: 44


//8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
//los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
//arreglos para ver cómo se implementa la variable contadora


let y = [-2, 8, 99, 1, 7];
let sum = 0;
y.forEach(m => {
  sum += m ** 2;
});
console.log("La suma de los cuadrados de los elementos del arreglo es: " + sum);
// irmprime: La suma de los cuadrados de los elementos del arreglo es: 10039


//9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
//contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
//Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
//la variable contadora 


let kk = [true, true, false, true, false, false];
let contador = 0;
let z = 0;
while (z < kk.length) {
  if (kk[i] === false) {
    contador++;
  }
  i++;
}
console.log("El número de veces que aparece false en el arreglo es: " + count);
//  imprime: El número de veces que aparece false en el arreglo es: 2


//10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
//inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
//palabra adso.
 
let arroz = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let adso = ["a", "d", "s", "o"];
let adsoCount = 0;
for (let i = 0; i < adso.length; i++) {
  if (arroz.indexOf(adso[i]) !== -1) {
    adsoCount++;
  }
}
if (adsoCount === 4) {
  console.log("Se puedeformar la palabra adso con los elementos del arreglo.");
} else {
  console.log("No se puede formar la palabra adso con los elementos del arreglo.");
}
// imprime: Se puede formar la palabra adso con los elementos del arreglo.


//11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del
//10 al 20 , p.e (5x10, 5x11...)

for (let i = 10; i <= 20; i++) {
  console.log("5 x " + i + " = " + (i * 5));
}
// imprime: 5 x 10 = 50 5 x 11 = 55 5 x 12 = 60 5 x 13 = 65 5 x 14 = 70 5 x 15 = 75 5 x 16 = 80 5 x 17 = 85 5 x 18 = 90 5 x 19 = 95 5 x 20 = 100

//12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar cuales numeros con consecutivos con otros, p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21.

let xd = [5, 7, 90, 2, 5, 3, 8, 99];

xd.forEach((num1, index1) => {
  xd.forEach((num2, index2) => {
    if (index1 !== index2 && num1 + 1 === num2) {
      console.log(num1 + " y " + num2 + " son consecutivos.");
    }
  });
});
// imprime: 5 y 6 son consecutivos, 2 y 3 son consecutivos, 7 y 8 son consecutivos