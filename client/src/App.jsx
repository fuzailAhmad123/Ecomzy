import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navbar } from './my-components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='w-screen overflow-x-hidden min-h-screen h-fit ' >
       <div >
        <Navbar/>
       </div>
       <>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
       </>
     </div>
  )
}

export default App
