import assert from 'assert'
import fs from 'fs'
import { respaldar } from '../src/respaldarCallbacks.js'

const rutaInvalida = './test/static/rutaInvalida'
const rutaVacia = './test/static/rutaVacia'
const rutaConArchivosVisibles = './test/static/rutaConArchivosVisibles'
const rutaConArchivosOcultos = './test/static/rutaConArchivosOcultos'
const rutaConCarpetas = './test/static/rutaConCarpetas'
const rutaConArchivosMixtos = './test/static/rutaConArchivosMixtos'
const rutaDeLasCopias = './test/static/rutaCopias'

describe('respaldo de archivos (callbacks)', () => {
  it('probando...', (done) => {
    respaldar('', '', (err, res) => {
      if (err) {
        throw err
      } else {
        // assert res?
        done() // terminé
      }
    })
  })
})