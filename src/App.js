import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Inventory from './Component/Inventory/Inventory';
import Orders from './Component/Orders/Orders';
import About from './Component/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
