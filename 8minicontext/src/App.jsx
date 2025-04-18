
import './App.css'
import UserContextProvider from './contexts/UserContextProvider'
import Login from "./components/Login"
import Profile from './components/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1>Welcome to the Context Project</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
