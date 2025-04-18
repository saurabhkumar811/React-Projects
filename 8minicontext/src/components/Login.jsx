import UserContext from "../contexts/UserContext"
import {useState, useContext} from 'react'

export default function Login(){
  
   const [username , setUsername] = useState('')
   const [password , setPassword] = useState('')

   const {setUser} = useContext(UserContext)

   const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})
  }


 return(
  <div>
     <h3>Enter the login details</h3>
   <input type="text" 
   placeholder="username" 
   value={username}
   onChange={(e)=> setUsername(e.target.value)}/>
  
  <input type="text" 
   placeholder="password" 
   value={password}
   onChange={(e)=> setPassword(e.target.value)}/>

   <button onClick={handleSubmit}>Submit</button>
     </div>
 )

}