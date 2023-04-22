import { useCount } from "../../hooks/useCount"

const ItemCount = ({ ValInicial, minimo, maximo, onAdd }) => {
    
   const {count, sum, minus, reset} = useCount (ValInicial, minimo, maximo)

  
  return (
    <>
      <button className="btn btn-secondary" onClick={minus}>-</button>
      {count}
      <button className="btn btn-secondary" onClick={sum}>+</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>
      <button className="btn btn-secondary" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount;
