
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './Components/404/PageNotFound';
import UnderConstruction from './Components/404/UnderConstruction';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import NavBar from './Components/CommonRouts/NavBar';
import Home from './Components/home/Home';
import ItemDetail from './Components/ItemSection/ItemDetail';
import AddProduct from './Components/ProductManagement/AddProduct';
import RemoveProduct from './Components/ProductManagement/RemoveProduct';

function App() {
  return (
    <div className="text-base-black bg-gray-100">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
        <Route path='/removeproduct' element={<RemoveProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/underconstruction' element={<UnderConstruction />} />

      </Routes>
    </div>
  );
}

export default App;
