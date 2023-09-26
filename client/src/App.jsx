
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Homepage from './components/Homepage/Homepage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
          <Route index element={<Homepage/>}/>


      </Route>
    </Routes>
      
    </>
  )
}

export default App
