//Forma de repetir las cosas, ayuda a bajar la complejidad del algoritmo

function imprimirMensajeNVeces(
    mensaje:string,
    numeroVeces: number

) :void {
    if(numeroVeces == 0) {
        console.log(`Se termino`);
    } else {
    console.log(mensaje);
    const nuevoNumeroVeces = numeroVeces - 1;
    imprimirMensajeNVeces(mensaje, nuevoNumeroVeces)

    }
}

function main() {
    imprimirMensajeNVeces(`hola`, 3);
}



const arreglot : number[] = [1,2,3,4,5];

function recorrerUnArreglo(arreglot: number[] , numeroIndice: number ): void {
    console.log(arreglot);
    if (numeroIndice == 4){
    console.log(`Se termino`);
} else {
    const nuevoIndice = numeroIndice + 1;
    console.log( arreglot [nuevoIndice] );
    recorrerUnArreglo(arreglot, nuevoIndice)
}
}

function man() {
    recorrerUnArreglo( arreglot, 0)
}

//MATRICES
function maint() { 
const arregloDosDimensiones = 
[[1,2,3,4],[4,5,6,7]]; //indice y longitud
//i j k æ

//multiplicar el 0 * n elemento +
//multiplicar el 0+1 * n-1 elemento +
//multiplicar el 0+2 * n-2 elemento 
arregloDosDimensiones[0][0] //1
arregloDosDimensiones[0][1] //2
arregloDosDimensiones[1][0] //4
arregloDosDimensiones[1][1] //5

console.log(arregloDosDimensiones[0].length);
console.log(arregloDosDimensiones[1].length);

function productoCruz(vectores: number[][], indice, longitud) {
    longitud = arregloDosDimensiones[1].length
    indice = arregloDosDimensiones[0].length
    let suma = 0;
    let longitudv = 3;
    let multiplicado = 0;
    for(indice = 0; indice <=3; indice++){
        longitud = longitudv - 1;
        multiplicado = arregloDosDimensiones[0][indice] * arregloDosDimensiones[1][longitud]
        suma = suma + multiplicado 
        console.log(suma);;

    }
}
}

// [0,0. 1*7 + 2*6 + 3*5 + 4*4]


/* 
1) Definir el tamaño 
2) Repetir el calculo N veces (N=tamaño)
3.1) 1er elemento del 1er arreglo
3.2) Ultimo elemento del 2do arreglo
3.3) Sumar los elementos 
3.4) 1er elemento + 1 = 2do elemento del segundo arreglo-
3.5) Ultimo elemento -1 = penultimo del 2do Arreglo
3.6) Sumar los elemetos.
*/







