import fs from "fs"

console.log("Manejo de Archivos 1 (sync)")
console.log("=".repeat(50))

export { combinarDosArrays, combinarDosArraysConRepetidos, combinarNArrays };

// Crear un proyecto que implemente las siguientes funciones

// leerArchivoComoString
// Recibe la ruta del archivo que se quiere leer, 
// y devuelve un único string con todo el contenido del mismo.


// Para leer el contenido de un archivo y devolverlo como un único string utilizando el método síncrono 
// en Node.js, puedes utilizar fs.readFileSync(). Este método bloquea la ejecución del código hasta que 
// el archivo se haya leído completamente, lo que es útil cuando no necesitas manejar la operación 
// de forma asíncrona.


function leerArchivoComoStringSync(rutaArchivo) {
    try {
        // Leer el archivo de forma sincrónica con la codificación utf-8
        const contenido = fs.readFileSync(rutaArchivo, 'utf8');
        return contenido;
    } catch (error) {
        // console.log('Error al leer el archivo: \n')
        // console.error(error);
        // console.log()
        console.error('Error al leer el archivo:\n', error);
        console.log(".".repeat(50))
        throw error; // Lanzar el error si ocurre un problema al leer el archivo
    }
}

// Uso del método

const contenidoArchivo = leerArchivoComoStringSync('doc.txt');
console.log( "Tipo de archivo:" , typeof(contenidoArchivo) )
console.log(contenidoArchivo);

console.log("-".repeat(50))

// const contenidoArchivoFake = leerArchivoComoStringSync('docFake.txt');
// console.log( "Tipo de archivo:" , typeof(contenidoArchivoFake) )
// console.log(contenidoArchivoFake);


// ------------------------------------------------------------------------------------

// escribirTextoEnArchivo
// Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el
// directorio es válido pero el archivo no existe, decide que hacer según el flag:
//      ● Con el flag en true, crea el archivo y lo escribe.
//      ● Con el flag en false, lanza el error “el archivo no existe”.


function escribirTextoEnArchivo(rutaArchivo, texto, flag) {
    try {
        // Verificar si el archivo existe
        const archivoExiste = fs.existsSync(rutaArchivo);
        
        if (!archivoExiste && !flag) {
            // Lanzar error si el archivo no existe y el flag es false
            throw new Error('El archivo no existe');
        }
        
        // Si el archivo existe o el flag es true, escribir el archivo
        if (archivoExiste || flag) {
            // Grabar el archivo de forma sincrónica con la codificación utf-8
            fs.writeFileSync(rutaArchivo, texto, 'utf8');
            console.log("Texto escrito en archivo exitosamente");
        }
        
    } catch (error) {
        console.error('Error al escribir en el archivo:\n', error.message);
    }
}

// Uso del método

// Caso 1: El archivo no existe, pero el flag es true (debe crear y escribir el archivo)
escribirTextoEnArchivo('docEscrito.txt', 'Texto escrito exitosamente', true);

console.log("-".repeat(50))

// Caso 2: El archivo no existe, y el flag es false (debe lanzar un error)
escribirTextoEnArchivo('docNoExiste.txt', 'Texto escrito exitosamente', false);

console.log("-".repeat(50))


// ------------------------------------------------------------------------------------

// transformarStringEnArrayDeNumeros
// Recibe un texto y una secuencia de caracteres que usará como separador. Devuelve un array
// con todos los números producto de partir el texto cada vez que aparezca la secuencia
// separadora. En el caso de que alguna de las partes no sea numérica, no se incluirá en el
// resultado, pero no debe lanzar ningún error.
// Ejemplo
// Input: texto = ‘123 | 456 | 789 | 1bc | 10’ , separador = ‘ | ’
// Output: [123, 456, 789, 10]


// Puedes implementar la función transformarStringEnArrayDeNumeros utilizando los métodos 
// split() y filter() para partir el string basado en el separador y filtrar los valores no numéricos. 
// También, puedes usar map() para convertir los valores válidos en números.


function transformarStringEnArrayDeNumeros(texto, separador) {
    return texto
        .split(separador)  // Dividir el texto en partes usando el separador
//        .map(elemento => elemento.trim())  // Remover espacios en blanco alrededor
    //    .filter(elemento => !isNaN(elemento))  // Filtrar solo los valores que son números
        .filter(elemento => esNumero(elemento))  // Filtrar solo los valores que son números
        .map(elemento => Number(elemento));  // Convertir las partes numéricas a números
}

function esNumero(valor) {
    // Intentar convertir el valor a número y comprobar si es un número válido
    return !isNaN(valor) // && !isNaN(parseFloat(valor));
}

// Uso del método
const texto = '123 | 456 | 789 | 1bc | 10';
const separador1 = ' | ';
const resultado1 = transformarStringEnArrayDeNumeros(texto, separador1);
console.log(resultado1);  // Output: [123, 456, 789, 10]

console.log("-".repeat(50))


// ------------------------------------------------------------------------------------


// transformarArrayDeNumerosAUnSoloString
// Recibe un array con números, y una secuencia de caracteres para usar como separador.
// Devuelve un único string que es la unión de todos los números del array, intercalando la
// secuencia separadora entre cada uno.
// Ejemplo
// Input: array = [123, 456, 789, 10] , separador = ‘,’
// Output: ‘123,456,789,10’


// Para resolver esto, puedes usar el método join() de los arrays en JavaScript, que convierte todos 
// los elementos de un array en un solo string, intercalando un separador entre ellos.



function transformarArrayDeNumerosAUnSoloString(array, separador) {
    return array.join(separador);  // Convertir el array a string, usando el separador
}

// Uso del método
const array = [123, 456, 789, 10];
const separador = ',';
const resultado = transformarArrayDeNumerosAUnSoloString(array, separador);
console.log(resultado);  // Output: '123,456,789,10'

console.log("-".repeat(50))


// ------------------------------------------------------------------------------------


// combinarDosArrays
// Recibe dos arrays, ambos con datos de tipo numérico, ambos ordenados en forma ascendente,
// y sin repetidos dentro de cada array (puede haber repetidos entre un array y otro). Devuelve un
// nuevo array, que contenga todos los datos de ambos arrays, también ordenados en forma
// ascendente, y también sin repetidos.
// Ejemplo
// Input: array1 = [1, 5, 8, 10] , array2 = [2, 3, 8, 11]
// Output: [1, 2, 3, 5, 8, 10, 11]
// Observación
// Si se te ocurrió una solución que requiere poder ordenar un array, pensá en otra forma de
// hacerlo (que no requiera un ordenamiento).


// Para resolver este problema sin recurrir al ordenamiento posterior de los arrays (ya que ambos 
// están preordenados), podemos aprovechar la estructura de los arrays y usar un enfoque basado 
// en dos punteros. Este método permite recorrer ambos arrays en paralelo, combinando los elementos 
// de forma ordenada y sin repetidos.




function combinarDosArrays(array1, array2) {
    let i = 0, j = 0;
    const resultado = [];

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            if (resultado[resultado.length - 1] !== array1[i]) {  // Evitar duplicados
                resultado.push(array1[i]);
            }
            i++;
        } else if (array1[i] > array2[j]) {
            if (resultado[resultado.length - 1] !== array2[j]) {  // Evitar duplicados
                resultado.push(array2[j]);
            }
            j++;
        } else {  // Si son iguales
            if (resultado[resultado.length - 1] !== array1[i]) {  // Evitar duplicados
                resultado.push(array1[i]);
            }
            i++;
            j++;
        }
    }

    // Añadir los elementos restantes de array1 (si los hay)
    while (i < array1.length) {
        if (resultado[resultado.length - 1] !== array1[i]) {
            resultado.push(array1[i]);
        }
        i++;
    }

    // Añadir los elementos restantes de array2 (si los hay)
    while (j < array2.length) {
        if (resultado[resultado.length - 1] !== array2[j]) {
            resultado.push(array2[j]);
        }
        j++;
    }

    return resultado;
}

// Ejemplo de uso:
const array1 = [1, 5, 8, 10];
const array2 = [2, 3, 8, 11];
const resultado3 = combinarDosArrays(array1, array2);
console.log(resultado3);  // Output: [1, 2, 3, 5, 8, 10, 11]

const array3 = [1, 5, 8, 10];
const array4 = [2, 3, 8, 11, 13, 20];
const resultado4 = combinarDosArrays(array3, array4);
console.log(resultado4);  // Output: [1, 2, 3, 5, 8, 10, 11]


console.log("-".repeat(50))


// ------------------------------------------------------------------------------------


// Alternativa permitiendo repetidos en el array resultante

function combinarDosArraysConRepetidos(array1, array2) {
    let i = 0, j = 0;
    const resultado = [];

// Combinar ambos arrays
while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
        resultado.push(array1[i]);  // Agregar elemento de array1
        i++;
    } else {
        resultado.push(array2[j]);  // Agregar elemento de array2
        j++;
    }
}

// Añadir los elementos restantes de array1 (si los hay)
while (i < array1.length) {
    resultado.push(array1[i]);
    i++;
}

// Añadir los elementos restantes de array2 (si los hay)
while (j < array2.length) {
    resultado.push(array2[j]);
    j++;
}

return resultado;
}


// Ejemplo de uso:
const array5 = [1, 5, 8, 10];
const array6 = [2, 3, 8, 11];
const resultado5 = combinarDosArraysConRepetidos(array5, array6);
console.log(resultado5);  // Output: [1, 2, 3, 5, 8, 8, 10, 11]

console.log("-".repeat(50))


// ------------------------------------------------------------------------------------


//combinarNArrays
// Igual que la función anterior, solo que ésta recibe un array de arrays de números ordenados en
// forma ascendente y sin repetidos, y devuelve un nuevo array, con la combinación de todos los
// números de todos los arrays recibidos, también ordenados en forma ascendente, y también sin
// repetidos.
// Ejemplo
// Input: arrays = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]]
// Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]



// Para combinar múltiples arrays de números ordenados, podemos utilizar un enfoque basado en un 
// conjunto (Set) para eliminar duplicados y luego convertirlo de nuevo a un array. 
// Dado que todos los arrays de entrada están ordenados, podemos realizar la combinación de manera 
// eficiente utilizando un enfoque de "merge".


function combinarNArrays(arrays) {
    const resultado = [];
    const indices = new Array(arrays.length).fill(0); // Array para seguir los índices actuales de cada array
    const totalArrays = arrays.length;

    // Comprobar si queda algún array con elementos por procesar
    let arraysProcesados = false;

    while (!arraysProcesados) {
        let minValue = null;
        let minIndex = -1;
        arraysProcesados = true; // Asumimos que todos los arrays están procesados hasta comprobar lo contrario

        // Encontrar el valor mínimo entre los arrays
        for (let i = 0; i < totalArrays; i++) {
            if (indices[i] < arrays[i].length) { // Verificar si hay más elementos en el array actual
                arraysProcesados = false;  // Al menos un array tiene elementos no procesados
                const currentValue = arrays[i][indices[i]];
                if (minValue === null || currentValue < minValue) {
                    minValue = currentValue;
                    minIndex = i;
                }
            }
        }

        // Si encontramos un valor mínimo, lo agregamos al resultado
        if (minIndex !== -1) {
            // Evitar duplicados
            if (resultado.length === 0 || resultado[resultado.length - 1] !== minValue) {
                resultado.push(minValue);
            }

            // Incrementar el índice del array correspondiente
            indices[minIndex]++;
        }
    }

    return resultado;
}

// Ejemplo de uso:
const arrays = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
const resultado6 = combinarNArrays(arrays);
console.log(resultado6);  // Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]


// ------------------------------------------------------------------------------------


// Escribir código que permita probar las funciones creadas, utilizando los datos de prueba
// provistos. Luego configurar un script que permita ejecutar nuestro código de prueba mediante
// la instrucción: npm test.


// Si prefieres no usar frameworks como Jest y deseas escribir tus propias pruebas de manera manual, 
// puedes hacerlo creando un archivo de prueba que ejecute las funciones y compare los resultados 
// esperados con los obtenidos.

// Aquí tienes un ejemplo básico para hacer pruebas sin utilizar un framework:

// Paso 1: Escribir las pruebas manualmente
// Crea un archivo test.js y escribe las pruebas de esta forma:



// const { combinarDosArrays, combinarNArrays } = require('./path_to_your_functions_file');

// // Función para verificar si dos arrays son iguales
// function arraysIguales(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// }

// Pruebas para combinarDosArrays
// function testCombinarDosArrays() {
//     const arr1 = [1, 5, 8, 10];
//     const arr2 = [2, 3, 8, 11];
//     const resultadoEsperado = [1, 2, 3, 5, 8, 8, 10, 11];
//     const resultado = combinarDosArrays(arr1, arr2);
    
//     if (arraysIguales(resultado, resultadoEsperado)) {
//         console.log("Prueba combinarDosArrays: PASÓ");
//     } else {
//         console.log("Prueba combinarDosArrays: FALLÓ", { resultado, resultadoEsperado });
//     }
// }

// Pruebas para combinarNArrays
// function testCombinarNArrays() {
//     const arrays = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
//     const resultadoEsperado = [1, 2, 3, 4, 6, 7, 10, 13, 15, 16];
//     const resultado = combinarNArrays(arrays);

//     if (arraysIguales(resultado, resultadoEsperado)) {
//         console.log("Prueba combinarNArrays: PASÓ");
//     } else {
//         console.log("Prueba combinarNArrays: FALLÓ", { resultado, resultadoEsperado });
//     }
// }

// Ejecutar las pruebas
// function ejecutarPruebas() {
//     testCombinarDosArrays();
//     testCombinarNArrays();
// }

// ejecutarPruebas();


// Paso 2: Agregar un script de prueba en package.json
// En tu archivo package.json, puedes agregar un script para ejecutar este archivo de prueba usando Node.js:


// "scripts": {
//   "test": "node test.js"
// }


// Paso 3: Ejecutar las pruebas
// En la terminal, simplemente ejecuta el siguiente comando para correr las pruebas:


// npm test


//Explicación:
// Función arraysIguales: Esta función compara dos arrays para verificar si son iguales.
// Pruebas manuales (testCombinarDosArrays y testCombinarNArrays): En cada función de prueba, 
// se comparan los resultados obtenidos de las funciones con los resultados esperados. 
// Si coinciden, la prueba pasa, de lo contrario, la prueba falla.

// Salida: Cada prueba imprime un mensaje indicando si pasó o falló.
// Script de prueba en package.json: Con el script npm test, puedes ejecutar las pruebas 
// simplemente usando el comando npm test.
// Este enfoque no utiliza ningún framework y te permite ejecutar las pruebas manualmente mediante Node.js.


// ------------------------------------------------------------------------------------

//De package.json
//"test": "echo \"Error: no test specified\" && exit 1",