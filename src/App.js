import logo from './logo.svg';
import './App.css';
import LoginForm from './pages/login';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import AdminPage from'./pages/adminpage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Category from './pages/category.js';
import Product from './pages/product.js';
import AddCategory from './pages/addCategory.js';
import AddProduct from './pages/addProduct.js';

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<LoginForm/>}/>
    <Route path="/adminpage" element={<AdminPage/>}/>
    <Route path = "/category" element={<Category/>}/>
    <Route path = "/product" element={<Product/>}/>
    <Route path = "/addcategory" element={<AddCategory/>}/>
    <Route path = "/addproduct" element={<AddProduct/>}/>
    </Routes>
   </Router>
  );
}

export default App;
