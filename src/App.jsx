import './App.css'; 
import Navbar from './Components/Navbar.jsx'; 
import Category from './Components/Categories.jsx';
import Header from './Components/Header.jsx';
import ProductCard from './Components/ProductCard.jsx'; 

function App() {
  
  return (
  <>
    <Navbar/> 
    <Header />
    <Category/> 
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </>

  );
}

export default App; 