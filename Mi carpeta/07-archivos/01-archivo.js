"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
//import * as prompts from "C:/Users/USREPS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts";
//import * as prompts from "C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts";
var prompts = require("prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, arregloCargadoDeArchivo, contador, minimoId, arregloEstudiantes, arregloPreguntas, respuestaEstudianteUno, nuevoRegistroUno, respuestaEstudianteDos, nuevoRegistroDos, idABuscar, indiceEncontrado, nombreAEditar, buscar, estudianteEncontrado, arregloTexto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contenidoArchivo = _02_leer_archivo_1.leerArchivo('./ejemplo.txt');
                    console.log('contenidoArchivo', contenidoArchivo);
                    try {
                        arregloCargadoDeArchivo = JSON
                            .parse(contenidoArchivo);
                    }
                    catch (error) {
                        arregloCargadoDeArchivo = [
                            { "id": 1, "nombre": "Juanito" },
                            { "id": 2, "nombre": "Pepito" }
                        ];
                        console.error('Error parseando archivo');
                    }
                    contador = 3;
                    minimoId = -1;
                    arregloCargadoDeArchivo
                        .forEach(// NO ENVIA NADA y NO DEVUELVE NADA
                    // ITERAR
                    function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoId) {
                            minimoId = idActual;
                        }
                    });
                    minimoId = minimoId + 1;
                    contador = minimoId;
                    arregloEstudiantes = arregloCargadoDeArchivo;
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa tu nombre'
                        }
                    ];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 1:
                    respuestaEstudianteUno = _a.sent();
                    nuevoRegistroUno = {
                        id: contador,
                        nombre: respuestaEstudianteUno.nombre
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(nuevoRegistroUno);
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 2:
                    respuestaEstudianteDos = _a.sent();
                    nuevoRegistroDos = {
                        id: contador,
                        nombre: respuestaEstudianteDos.nombre
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(nuevoRegistroDos);
                    console.log('Cual usuario quieres Editar?');
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el ID del registro a Editar'
                        })];
                case 3:
                    idABuscar = _a.sent();
                    indiceEncontrado = arregloEstudiantes.findIndex(// return CONDICION ->
                    function (valorActual, indice, arreglo) {
                        return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                    );
                    console.log('Indice encontrado:', indiceEncontrado);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa el nuevo nombre'
                        })];
                case 4:
                    nombreAEditar = _a.sent();
                    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Buscar por ID o por NOMBRE'
                        })];
                case 5:
                    buscar = _a.sent();
                    estudianteEncontrado = arregloEstudiantes
                        .find(// return CONDICION
                    function (valorActual) {
                        return valorActual.nombre == buscar.nombre;
                    });
                    console.log(estudianteEncontrado);
                    arregloTexto = JSON.stringify(arregloEstudiantes);
                    // JSON.stringify -> Convierte objeto o arreglo en memoria
                    //                -> a texto
                    console.log(arregloTexto);
                    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', arregloTexto);
                    return [2 /*return*/];
            }
        });
    });
}
main().then().catch();
