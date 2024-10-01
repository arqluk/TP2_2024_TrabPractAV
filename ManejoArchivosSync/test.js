import { combinarDosArrays, combinarDosArraysConRepetidos, combinarNArrays } from './index.js';

// Función para verificar si dos arrays son iguales
function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Pruebas para combinarDosArrays
function testCombinarDosArrays() {
    const arr1 = [1, 5, 8, 10];
    const arr2 = [2, 3, 8, 11];
    const resultadoEsperado = [1, 2, 3, 5, 8, 10, 11];
    const resultado = combinarDosArrays(arr1, arr2);
    
    if (arraysIguales(resultado, resultadoEsperado)) {
        console.log("Prueba combinarDosArrays: PASÓ");
    } else {
        console.log("Prueba combinarDosArrays: FALLÓ", { resultado, resultadoEsperado });
    }
}

// Pruebas para combinarDosArraysConRepetidos
function testCombinarDosArraysConRepetidos() {
    const arr1 = [1, 5, 8, 10];
    const arr2 = [2, 3, 8, 11];
    const resultadoEsperado = [1, 2, 3, 5, 8, 8, 10, 11];
    const resultado = combinarDosArraysConRepetidos(arr1, arr2);
    
    if (arraysIguales(resultado, resultadoEsperado)) {
        console.log("Prueba combinarDosArraysConRepetidos: PASÓ");
    } else {
        console.log("Prueba combinarDosArraysConRepetidos: FALLÓ", { resultado, resultadoEsperado });
    }
}

// Pruebas para combinarNArrays
function testCombinarNArrays() {
    const arrays = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
    const resultadoEsperado = [1, 2, 3, 4, 6, 7, 10, 13, 15, 16];
    const resultado = combinarNArrays(arrays);

    if (arraysIguales(resultado, resultadoEsperado)) {
        console.log("Prueba combinarNArrays: PASÓ");
    } else {
        console.log("Prueba combinarNArrays: FALLÓ", { resultado, resultadoEsperado });
    }
}

// Ejecutar las pruebas
function ejecutarPruebas() {
    testCombinarDosArrays();
    testCombinarDosArraysConRepetidos();
    testCombinarNArrays();
}

ejecutarPruebas();
