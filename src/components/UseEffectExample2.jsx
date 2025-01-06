import React, { useEffect, useState } from 'react'

const UseEffectExample2 = () => {
    const [laps, setLaps] = useState(0);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
  
    useEffect(() => {
      setTimeInSeconds(0);
  
      const intervalId = setInterval(() => {
        setTimeInSeconds((timeInSeconds) => timeInSeconds + 1);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [laps]);
  
    return (
      <div>
        <p>Vueltas: {laps}</p>
        <p>Tiempo en segundos: {timeInSeconds}</p>
        <button onClick={() => setLaps((laps) => laps + 1)}>Finalizar Vuelta</button>
      </div>
    );
}

export default UseEffectExample2
