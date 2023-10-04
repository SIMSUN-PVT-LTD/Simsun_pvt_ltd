
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Homepage from './components/Homepage/Homepage'
import OurCompany from './CompanyPages/OurCompany/OurCompany'
import OurTeam from './CompanyPages/OurTeam/OurTeam'
import News from './CompanyPages/News/News'
import OurCompanySuccess from './CompanyPages/OurCompanySuccess/OurCompanySuccess'
import Lift from './CompanyPages/Product/Lift/Lift'
import Esclator from './CompanyPages/Product/Esclator/Esclator'
import LiftSparePart from './CompanyPages/Product/LiftSparePart/LiftSparePart'
import EsclatorSparePart from './CompanyPages/Product/EsclatorSparePart/EsclatorSparePart'
import NewInstallationServices from './CompanyPages/Services/NewInstallationServices'
import AnnualMaintainenceServices from './CompanyPages/Services/AnnualMaintainenceServices'
import BreakdownServices from './CompanyPages/Services/BreakdownServices'
import Shop from './CompanyPages/shop/Shop'
import YourOrders from './CompanyPages/customerServices/YourOrders'
import ReturnandRefund from './CompanyPages/customerServices/ReturnandRefund'
import ManageAddress from './CompanyPages/customerServices/ManageAddress'
import PaymentSetting from './CompanyPages/customerServices/PaymentSetting'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
          <Route index element={<Homepage/>}/>

          <Route path='/about/ourcompany' element={<OurCompany/>}/>
          <Route path='/about/ourteam' element={<OurTeam/>}/>
          <Route path='/about/news' element={<News/>}/>
          <Route path='/about/ourcompanysuccess' element={<OurCompanySuccess/>}/>

          <Route path='/product/lift' element={<Lift/>}/>
          <Route path='/product/esclator' element={<Esclator/>}/>
          <Route path='/product/LiftSparePart' element={<LiftSparePart/>}/>
          <Route path='/product/EsclatorSparePart' element={<EsclatorSparePart/>}/>

          <Route path='/services/NewInstallationServices' element={<NewInstallationServices/>}/>
          <Route path='/services/AnnualMaintainenceServices' element={<AnnualMaintainenceServices/>}/>
          <Route path='/services/BreakdownServices' element={<BreakdownServices/>}/>
        
          <Route path='/shop' element={<Shop/>}/>

          <Route path='/customerservices/YourOrders' element={<YourOrders/>}/>
          <Route path='/customerservices/ReturnandRefunds' element={<ReturnandRefund/>}/>
          <Route path='/customerservices/ManageAddress' element={<ManageAddress/>}/>
          <Route path='/customerservices/PaymentSetting' element={<PaymentSetting/>}/>

      </Route>
    </Routes>
      
    </>
  )
}

export default App
