import assert from 'assert'
import fs from 'fs'
import { respaldar } from '../src/respaldar.js'

const rutaInvalida = './test/static/rutaInvalida'
const rutaVacia = './test/static/rutaVacia'
const rutaConArchivosVisibles = './test/static/rutaConArchivosVisibles'
const rutaConArchivosOcultos = './test/static/rutaConArchivosOcultos'
const rutaConCarpetas = './test/static/rutaConCarpetas'
const rutaConArchivosMixtos = './test/static/rutaConArchivosMixtos'
const rutaDeLasCopias = './test/static/rutaCopias'

describe('respaldo de archivos (sync)', () => {
  it('probando...', () => {
    respaldar('', '')
    // assert?
  })
})