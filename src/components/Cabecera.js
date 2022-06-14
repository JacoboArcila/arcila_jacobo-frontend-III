import React from 'react'
import { Contenedor, Span } from './CabeceraStyles'

export default function Cabecera({count}) {
  return (
    <Contenedor>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <Span>{count}</Span></p>
    </Contenedor>
  )
}
