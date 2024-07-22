import './App.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import { Signup } from './components/flow/signup'
import { Login } from './components/flow/login'
import { Home } from './components/home'
import { Lang } from './components/lang'
import { Following } from './components/home/following'
import { Message } from './components/home/message'
import { Loginpass } from './components/flow/login_password'
import { Profile } from './components/home/profile'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Lang/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='home' element={<Home/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='following' element={<Following/>}/>
          <Route path='message' element={<Message/>}/>
        </Route>
        <Route path='Loginpass' element={<Loginpass/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App
