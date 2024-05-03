import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Landingpage from './components/Landingpage'
import Footer from './components/Footer'
import EditText from './components/EditText'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/edit' element={<EditText/>}></Route>
        <Route path='/*' element={<Landingpage/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
