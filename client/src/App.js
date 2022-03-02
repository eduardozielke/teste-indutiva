import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import Product from './components/Product';
import PageNotFound from './components/PageNotFound';
import AddProduct from './components/AddProduct';
import PrivateRoute from './components/PrivateRoute';
import AdminsOnly from './components/AdminsOnly';
import PatchProduct from './components/PatchProduct';
import AddCategory from './components/AddCategory';
import Cart from './components/Cart';
import DeleteProducts from './components/DeleteProducts';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:category" element={<Main/>}/>
        <Route path="/produto/:id/" element={<Product />}/>
        <Route path="/admin/add" element={<PrivateRoute redirectTo='/adminsonly'>
          <AddProduct />
        </PrivateRoute>}/>
        <Route path="/add-category" element={<PrivateRoute redirectTo='/adminsonly'>
          <AddCategory/>
        </PrivateRoute>}/>
        <Route path="/editar/:id" element={<PrivateRoute redirectTo='/adminsonly'>
          <PatchProduct/>
        </PrivateRoute>}/>
        <Route path='/deletar' element={<PrivateRoute redirectTo='/adminsonly'>
          <DeleteProducts/>
        </PrivateRoute>}/>
        <Route path="/carrinho" element={<Cart/>}/>
        <Route path="/adminsonly" element={<AdminsOnly/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
