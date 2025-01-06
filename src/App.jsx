import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayoutExample from './components/LayoutExample'
import UseRefExample from './components/UseRefExample'
import UseRefExample2 from './components/UseRefExample2'
import UseEffectExample from './components/UseEffectExample'
import UseEffectExample2 from './components/UseEffectExample2'
import ItemCount from './components/ItemCount'
import UseEffectExample3 from './components/UseEffectExample3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Bienvenidos!</h1>
      <LayoutExample title="Ejemplo de Children">
        <p>Este es un ejemplo de un componente Layout</p>
      </LayoutExample>
      <UseRefExample />
      <UseRefExample2 />
      <UseEffectExample />
      <UseEffectExample2 />
      <ItemCount stock={10} initial={1}/>
      <UseEffectExample3 />
    </>
  )
}

export default App
