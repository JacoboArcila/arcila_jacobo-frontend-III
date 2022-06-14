import React, {useState, useEffect} from 'react';
import {Producto, Button} from './ItemStyles';

const Item = ({producto, setCount}) => {

  const [num, setNum] = useState();
  
  useEffect(() => {
    setNum(producto.stock)
  }, [producto.stock])

  const handleNum = () => {
    if(num > 0 ) {
      setCount(prevState => prevState + 1);
      setNum(prevState => prevState - 1);
    }
  }

  return (
    <Producto className='producto'>
      <h2>{producto.producto.nombre}</h2>
      <p>{producto.producto.descripcion}</p>
      <h5>Stock: {num === 0 ? <span className='stock'>Sin stock</span> : num } </h5>
      <Button onClick={() => handleNum()}>Comprar</Button>
    </Producto>
  )
}

export default Item
