import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Inventory from './Component/Inventory/Inventory';
import Orders from './Component/Orders/Orders';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/Login/Login';
import RequirAuth from './Component/RequirAuth/RequirAuth';
import Shipment from './Component/Shipment/Shipment';
import AddProduct from './Component/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>

        <Route path='/inventory' element={
          <RequirAuth>
            <Inventory></Inventory>
          </RequirAuth>
        }></Route>

        <Route path='/shipment' element={
          <RequirAuth>
            <Shipment></Shipment>
          </RequirAuth>
        }></Route>

        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
