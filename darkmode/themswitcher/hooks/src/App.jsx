import { useState } from 'react'

import './App.css'

function App() {

let [counter, setCounter] = useState(15)
 


const addValue = () => {
  console.log('value added', counter)
  // counter= (counter +1 )
  setCounter(counter + 1)
}

const remove =()=> {
  setCounter(counter-1)
}
  return (
    <>
    <h1>this is good </h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}
    >Add value</button>
    <br />
    <button onClick={remove} >remove value</button>
    
    </>
  )
}

export default App
