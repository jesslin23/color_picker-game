import React,{useState} from "react";

const ColorPicker =() =>{
    let [color,setColor]= useState("black");
    const colorop=["red","blue","cyan","pink","green"];

    return(
        <div><h1>Color Picker</h1>
        <div style={{
            backgroundColor:color,
            width:"20px",
            height:"20px",
        }}></div>

        <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
        
        <div>{colorop.map((c,index)=>(<button key={index}
        onClick={()=>setColor(c)} style={{
            backgroundColor:c,
            height:"40px",
            width:"40px"}}></button>
        ))}</div>
        </div>
    )
}

export default ColorPicker;