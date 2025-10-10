import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-listing" element={<ProductListing />} />
      </Routes>
    </>
  );
}

export default App
