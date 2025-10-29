import { Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App
