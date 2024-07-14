import './App.css';
import {Routes, Route} from 'react-router';
import Header from './pages/header/Header';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default App;
