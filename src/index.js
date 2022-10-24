import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import CalcularForm from './components/CalcularForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App=()=>{
  const[cantidad,setCantidad]=useState(0)
  const[conver,setConver]=useState(0)
  const[op,setOp]=useState(0)
  const onChange=(e)=>{
    if(e.target.name=='cantidad'){
        setCantidad(e.target.value);
    }
}
  return(
    <>
    <div>
      <h1>Conversion pesos a x denominacion</h1>
      <label htmlFor="cantidad">Cantidad</label>
      <input 
            type="text"
            name="cantidad"
            id="cantidad"
            value={cantidad}
            onChange={onChange}
            />       
    </div>
    <div>
    <h2>Cantidad en...</h2>
    <button onClick={()=>setOp(1)}>MX</button>
    <button onClick={()=>setOp(2)}>USD</button>
    <button onClick={()=>setOp(3)}>EURO</button>
    <button onClick={()=>setOp(4)}>BITCOIN</button>
    <button onClick={()=>setOp(5)}>ETH</button>
    <button onClick={()=>setOp(6)}>DOGE</button>
    </div>
    <div>
    <>
    {op==1 ?(
      cantidad=cantidad
    ):op==2 ?(
      cantidad=cantidad*19.93
    ):op==3 ?(
      cantidad=cantidad*19.67
    ):op==4 ?(
      cantidad=cantidad*385282.54
    ): op==5 ?(
      cantidad=cantidad*26686.03
    ): op==6 ?(
      cantidad=cantidad*1.18
    ):
    <p>Ingrese opcion valida</p>
    }
    </>
    </div>
    <div>
    <h2>Conversion a...</h2>
    <button onClick={()=>setConver(cantidad/19.93)}>USD</button>
    <button onClick={()=>setConver(cantidad/19.67)}>EURO</button>
    <button onClick={()=>setConver(cantidad/385282.54)}>BITCOIN</button>
    <button onClick={()=>setConver(cantidad/26686.03)}>ETH</button>
    <button onClick={()=>setConver(cantidad/1.18)}>DOGE</button>
    <h2>Conversion: {conver}</h2>
    </div>
    </>
  )
  
}
root.render(<App/>
);

