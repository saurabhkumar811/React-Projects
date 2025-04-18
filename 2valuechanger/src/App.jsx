import { useState } from 'react'
import './App.css'

function App() {
  
     let [counter , setCounter] = useState(14)

   //let x = 15

   function addValue() {
     
      if(counter == 20)
      {
        console.log("max value reached ");
        return 
      }
      
    // setCounter(counter+1)
    // console.log(counter);

     setCounter((counter)=>counter+1)
    setCounter(counter=> counter+1)
    setCounter(counter=>counter+1)

   }

   function reduceValue(){
    
    if(counter == 0)
      {
         console.log("min value reached ");
        return 
      }

    counter -= 1
    setCounter(counter)
    console.log(counter);
   }

  return (
    <>
      <h1>Value Changer</h1>
      <h2>Value : {counter} </h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <span>    </span>
      <button onClick={reduceValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
