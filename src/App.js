import { useState } from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(true)

const [checked1, setChecked1] = useState(false)
const [result, setResult] = useState(false)

function handleSubmit() {
  setResult(checked1 ? 'button is checked' : 'button is NOT checked')
}

  return (
    <div className="App">
      <input type="checkbox" checked={true}/> True checked <br />
      <input type="checkbox" checked={false}/>  False checked
      <br />
      <hr />
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> status from state
      <p>Состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
      <br />
      <br />
      <hr />
      <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} />
      <button onClick={handleSubmit} >Button</button>
      <p>{result}</p>

    </div>
  );
}

export default App;
