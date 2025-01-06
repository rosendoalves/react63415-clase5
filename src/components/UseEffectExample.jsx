import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`El valor del contador es ${count}`);
    }, [count]);
  
    const increment = () => {
      setCount((prev) => prev + 1);
    };
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={increment}>Incrementar count</button>
      </div>
    );
}

export default UseEffectExample
