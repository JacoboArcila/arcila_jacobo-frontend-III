import React from 'react'
import Item from './Item';
import data from './data.json';
import {Container} from './ListadoStyles';

export default function Listado({setCount}) {
  return (
    <Container className='container'>    
      {
        data.map(i => 
        <Item
          key={i.id}
          producto={i}
          setCount={setCount}
        />)
      }
    </Container>
  )
}
