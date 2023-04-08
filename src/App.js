
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';

import Home from './pages/client/Home';
import Login from './pages/client/Login';
import Signup from './pages/client/Signup';
import DoctorSignup from './pages/Doctor/DoctorSignup';

function App() {
  return (

 <BrowserRouter>
  <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/doctor/doctor_signup' element={<DoctorSignup/>}></Route>
      </Routes>
  </main>
</BrowserRouter> 


  );
}

export default App;
