import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = (quantity) => {
    console.log(`Has agregado ${quantity} items al carrito.`);
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <p>{count}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={decrement} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>
          +
        </button>
      </div>
      <button onClick={() => handleAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
