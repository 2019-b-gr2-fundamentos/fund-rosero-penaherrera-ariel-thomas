import * as fs from 'fs'; 

export function leerArchivo (path:string): string {
    console.log("Leer Archivo");
    const resultado = fs.readFileSync(
        path, 
        'utf-8' 
    )
    console.log(resultado);  
    return resultado;

}
