import './App.css'
import { BrowserRouter , Navigate, Route, Routes} from 'react-router-dom'
import { Signup } from './components/flow/signup'
import { Login } from './components/flow/login'
import { Home } from './components/home'
import { Lang } from './components/lang'
import { Following } from './components/home/following'
import { Message } from './components/home/message'
import { Loginpass } from './components/flow/login_password'
import { Profile } from './components/home/profile'
import {  useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Editprofile from './components/editprofile'
import { Wallet } from './components/home/wallet'
import { Moneysend } from './components/home/moneysend'


function App() {
const {currentUser} = useContext(AuthContext)

const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to='/'/>
  }
  return children
  
}

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Lang/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='following' element={<Following/>}/>
          <Route path='message' element={<Message/>}/>
          <Route path='wallet' element={<Wallet/>}/>
        </Route>
        <Route path='home/wallet/payment' element={<Moneysend/>}/>
        <Route path='home/profile/editprofile' element={<Editprofile/>}/>
        <Route path='Loginpass' element={<Loginpass/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App
