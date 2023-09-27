
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Homepage from './components/Homepage/Homepage'
import OurCompany from './CompanyPages/OurCompany/OurCompany'
import OurTeam from './CompanyPages/OurTeam/OurTeam'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
          <Route index element={<Homepage/>}/>
          <Route path='/about/ourcompany' element={<OurCompany/>}/>
          <Route path='/about/ourteam' element={<OurTeam/>}/>


      </Route>
    </Routes>
      
    </>
  )
}

export default App
