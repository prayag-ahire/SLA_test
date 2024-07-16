import './App.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import { Signup } from './components/flow/signup'
import { Login } from './components/flow/login'
import { Home } from './components/home'
import { Lang } from './components/lang'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Lang/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
