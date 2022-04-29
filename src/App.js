
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login';
import NavBar from './Components/CommonRouts/NavBar';
import Home from './Components/home/Home';

function App() {
  return (
    <div className="">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/login' element={<Login  />} />

      </Routes>
    </div>
  );
}

export default App;
