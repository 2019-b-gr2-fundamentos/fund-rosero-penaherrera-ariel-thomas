/*
1) Definir un arreglo
2) que operacion se quiere hacer
2.1) Si desea añadir
    2.1.1) Definir el elemento que se quiere añadir
    2.1.2) Definir el indice donde desea añadir el elemento
    2.1.3) añadir elelemento
2.2) Si desea borrar
    2.2.1) Mencione el indice del elemento que desea borrar
    2.2.2) borrar el elemento
3) imprimir el nuevo arreglo
*/
var arreglo = [1, 2, 3, 4];
var m = arreglo.length; //4
console.log(arreglo);
// añadir elemento "1.5"
var elementoAñadido = 1.5;
var indiceDondeSeInsertaElElemento = 1;
arreglo.push(elementoAñadido);
var nuevoElemento = arreglo[m];
arreglo[m] = arreglo[m - 1];
arreglo[m - 1] = arreglo[m - 2];
arreglo[m - 2] = arreglo[m - 3];
//en caso de aumentar elementos al arreglo, aumentar una línea más justo aquí Ejemplo arreglo[n - 3] = arreglo[n - 4]
arreglo[indiceDondeSeInsertaElElemento] = nuevoElemento;
console.log(arreglo);
// borrar elemento "2"
var indiceElementoAEliminar = 2;
//en caso de aumentar elementos al arreglo, aumentar una línea más justo aquí Ejemplo arreglo[n - 4] = arreglo[n - 3]
arreglo[m - 2] = arreglo[m - 1];
arreglo[m - 1] = arreglo[m];
arreglo[m] = arreglo[indiceElementoAEliminar];
arreglo.pop();
console.log(arreglo);