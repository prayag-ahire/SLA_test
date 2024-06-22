import './App.css'

import { NewUsers } from './components/newuser'
import { Welcomeimg } from './components/welcomeimg'
import { BrowserRouter, Router , Route, Routes} from 'react-router-dom'
import { Signup } from './components/flow/signup'
import { Login } from './components/flow/login'


function App() {
  return (
    <div className='flex  h-svh  bg-black items-center pl-24'>
      <BrowserRouter>
      <div ><Welcomeimg/></div>
      <div><NewUsers/></div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
