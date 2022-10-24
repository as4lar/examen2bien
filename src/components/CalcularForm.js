import { useState } from "react"

const CalcularForm=()=>{
    const[cantidad,setCantidad]=useState(0);
    const[conver,cambiarConv]=useState("");

    const onChange=(e)=>{
        if(e.target.name=='cantidad'){
            setCantidad(e.target.value);
        }
    }
    const onSubmit=(e)=>{
        e.preventDefault(e);

    }

    return(
        <form action="" onSubmit={onSubmit}>
        <div>
            <label htmlFor="cantidad">Cantidad</label>
            <input 
            type="text"
            name="cantidad"
            id="cantidad"
            value={cantidad}
            conver={cantidad}
            onChange={onChange}
            />
        </div>
        <div>
        <button onClick={()=>cambiarConv(conver/19.93)}>USD</button>
        <h1>Conversion: {conver}</h1>
        </div>
        </form>
    );
}
export default CalcularForm;