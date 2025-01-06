import React, { useEffect, useRef, useState } from 'react'

const UseRefExample2 = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
  
    renderCount.current++;
    console.log('me renderizo')

    // useEffect(() => {
    //     renderCount.current++;
    //   }, [count]);
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Incrementar</button>
        <p>Este componente se ha renderizado {renderCount.current} veces.</p>
      </div>
    );
}

export default UseRefExample2
