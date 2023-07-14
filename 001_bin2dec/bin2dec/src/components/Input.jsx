import { useState } from "react"
import './style.css'

useState
export const Input = () => {
  const [binary,setBinary]  = useState('0');
  let resp = binary;

  if(isNaN(resp)){
    resp = '0';
  }

  function handlbinary(e){
    let bin = e.target.value;
    setBinary(parseInt(bin,2));
  }

  function handlesubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
    <form onSubmit={handlesubmit}> 
      <h2>{resp}</h2>
      <input id="binInput"  placeholder='binary number:'  name="binary" onInput={ (e) => handlbinary(e)} maxLength={8}/>
      <button type="submit">Enviar</button>
    </form>
    </div>
  )
}
