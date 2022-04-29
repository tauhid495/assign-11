
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import NavBar from './Components/CommonRouts/NavBar';
import Home from './Components/home/Home';
import AddProduct from './Components/ProductManagement/AddProduct';
import RemoveProduct from './Components/ProductManagement/RemoveProduct';

function App() {
  return (
    <div className="text-base-black">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/removeproduct' element={<RemoveProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
