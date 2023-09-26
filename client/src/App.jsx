
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
          <Route index element={<h1>homepage</h1>}/>


      </Route>
    </Routes>
      
    </>
  )
}

export default App
