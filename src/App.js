import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react';
import Basket from './pages/Basket';
import OrderDone from './pages/OrderDone';
import ProductItem from './pages/ProductItem';
import { userToken } from './http/userAPI';
import { getCategoryAndItems } from './http/productsAPI';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/actions/productsActions';
import { createBasket } from './redux/actions/basketActions';

const App = () => {
  const [token, setToken] = useState({});
  const [selectedProducts, setSelectedProducts] = useState({})  

  const dispatch = useDispatch()
      
  useEffect(() => {
    const token = userToken().then((res) => {
      dispatch(createBasket(res.data.data));
    })
    const data = getCategoryAndItems().then((res) => {
      dispatch(fetchProducts({...res.data.data, results: res.data.data.results.map(category => {
        return {...category, items: category.items.map(product => {
          return {...product, counter:1}
      })}})}))})
  }, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setSelectedProducts={setSelectedProducts} />} />
        <Route path="/type" element={<ProductItem selectedProducts={selectedProducts}/> } />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<OrderDone />} />
      </Routes>
    </div>
  );
}

export default App;

