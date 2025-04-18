import { useState } from "react"
import './App.css'

function App() {

   const [color,setColor] = useState("blue")

  return (
    <>
      <div className=' w-full h-screen  min-h-screen min-w-screen text-white' style={{backgroundColor : color}}>
        
         <div className=" fixed flex  justify-center bottom-12 inset-x-0 px ">
          
           <div  className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl ">
               <button onClick={()=>setColor('red')} className="outline-none text-white shadow-2xl px-2 py-2" style={{backgroundColor : 'red'}}>Red</button>
               <button onClick={()=>setColor('green')}className="outline-none text-white shadow-2xl px-2 py-2" style={{backgroundColor : 'Green'}}>Green</button>
               <button onClick={()=>setColor('white')}className="outline-none text-black shadow-2xl px-2 py-2" style={{backgroundColor : 'White'}}>White</button>
               <button onClick={()=>setColor('grey')}className="outline-none text-white shadow-2xl px-2 py-2" style={{backgroundColor : 'Grey'}}>Grey</button>
               <button onClick={()=>setColor('yellow')}className="outline-none text-black shadow-2xl px-2 py-2" style={{backgroundColor : 'Yellow'}}>Yellow</button>
               <button onClick={()=>setColor('purple')}className="outline-none text-white shadow-2xl px-2 py-2" style={{backgroundColor : 'Purple'}}>Purple</button>
               <button onClick={()=>setColor('orange')}className="outline-none text-white shadow-2xl px-2 py-2" style={{backgroundColor : 'Orange'}}>Orange</button>
               <button onClick={()=>setColor('black')}className="outline-none text-white shadow-2xl px-2 py-2" style={{backgroundColor : 'Black'}}>Black</button>
            </div>
         </div>
      </div>
    </>
  )
}

export default App
