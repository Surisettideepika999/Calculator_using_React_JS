import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [cal,setVal]=useState("")
    const [result,setResult]=useState("")
    const Clear=()=>{
        setResult("");
        setVal("")
    }
  return (
    <div>
        <center>
            <input type="text" name="cal" value={cal} onChange={(e)=>{setVal(e.target.value)}} />
           <button id="cl" onClick={Clear} ><h2>Clear</h2></button>
           
            <table id="calcu">
            <tr>
           <td> <button id='but' onClick={()=>setVal(cal+"1")} ><h2>1</h2></button></td>
           <td> <button id='but' onClick={()=>setVal(cal+"2")} ><h2>2</h2></button></td>
            <td><button id='but' onClick={()=>setVal(cal+"3")} ><h2>3</h2></button></td>
           <td><button id='but' onClick={()=>setVal(cal+"+")} ><h2>+</h2></button></td>
            </tr>
            <tr>
            <td> <button id='but' onClick={()=>setVal(cal+"4")} ><h2>4</h2></button></td>
           <td> <button id='but' onClick={()=>setVal(cal+"5")} ><h2>5</h2></button></td>
            <td> <button id='but' onClick={()=>setVal(cal+"6")} ><h2>6</h2></button></td>
           <td><button id='but' onClick={()=>setVal(cal+"-")} ><h2>-</h2></button></td> 
            </tr>
            <tr>
            <td><button id='but' onClick={()=>setVal(cal+"7")} ><h2>7</h2></button></td>
            <td> <button id='but' onClick={()=>setVal(cal+"8")} ><h2>8</h2></button></td>
            <td><button id='but' onClick={()=>setVal(cal+"9")} ><h2>9</h2></button></td>
            <td><button id='but' onClick={()=>setVal(cal+"*")} ><h2>*</h2></button></td>
            </tr>
            <tr>
            <td><button id='but' onClick={()=>setVal(cal+"0")} ><h2>0</h2></button></td>
            <td><button id='but' onClick={()=>setVal(cal+".")} ><h2>.</h2></button></td>
            <td><button id='but' onClick={()=>setVal(eval(cal))} ><h2>=</h2></button></td>
            <td><button id='but' onClick={()=>setVal(cal+"/")} ><h2>/</h2></button></td>
             </tr>
            </table>
        </center>
    </div>
  )
}

export default Calculator
