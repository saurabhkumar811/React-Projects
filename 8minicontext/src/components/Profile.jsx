import UserContext from "../contexts/UserContext"
import {useContext} from 'react'

export default function Profile(){

   const {user} = useContext(UserContext)


   if (!user) {
    return (<div>Please Login</div>)
    }

 return(
  <div>
    <h4> welcome {user.username}</h4>
  </div>
 )

}