

import React from 'react'
import { useState } from 'react'

const App2 = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const [checked4, setChecked4] = useState(false)

  

  let message;
  if(checked4) {
    message = <p>check true</p>
  } else {
    message = <p>check false</p>
  }


  return (
    <div className='App'>
      <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} /> HTML <br />
      <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} /> CSS <br />
      <input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} /> JS
      <br />
      <br />
      <p>{checked1 ? 'HTML' : ''}</p>
      <p>{checked2 && 'CSS'}</p>
      <p>{checked3 && 'JS'}</p>
      <hr />
      <input type="checkbox" checked={checked4} onChange={() => setChecked4(!checked4)} />

      <h1>{message}</h1>
      
    </div>
  )
}

export default App2
