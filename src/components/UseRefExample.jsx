import React, { useRef } from 'react'

const UseRefExample = () => {
    const divRef = useRef(null);
    const handleClick = () => {
        divRef.current.innerHTML = 'Nuevo contenido';
      };
    
      return (
        <div>
          <div ref={divRef}>Contenido original</div>
          <button onClick={handleClick}>Cambiar contenido</button>
        </div>
      )
}

export default UseRefExample
