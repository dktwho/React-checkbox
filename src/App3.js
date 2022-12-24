

import React from 'react'
import { useState } from 'react'

const App3 = () => {

  const [checked, setChecked] = useState(false)

  const [checked2, setChecked2] = useState(false)

  let message;
  if(checked) {
    message = <div><h2>Ура есть 18 </h2><p>Здесь контент для взрослых</p></div>
  } else {
    message = <div><p>увы вам еще нет 18 </p></div>
  }


  return (
    <div className='App'>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />  Есть 18 лет ?
      <>{message}</>
      <br />
      <br /> 
      <hr />
      Если check true ты видишь абзац, если нет - то нет 
      <br />
      <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />  
      {checked2 && <p>Виден абзац</p>}

      
    </div>
  )
}

export default App3
