import UserContext from "./UserContext"
import React from 'react'

const UserContextProvider = ({children})=>{
     const [user,setUser] = React.useState('')
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider