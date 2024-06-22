import './App.css'

import { NewUsers } from './components/newuser'
import { Welcomeimg } from './components/welcomeimg'
import { Modal } from './components/modal'
import { BrowserRouter, Router , Route, Routes} from 'react-router-dom'


function App() {
  // const navigate = useNavigate();
  return (
    <div className='flex  h-svh  bg-black items-center pl-24'>
      <BrowserRouter>
      <div ><Welcomeimg/></div>
      <div><NewUsers/></div>
      <Routes>
        <Route path='/login' element={<Modal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
