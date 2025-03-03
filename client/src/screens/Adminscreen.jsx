import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import UsersList from "./UsersList"
import ProductsList from "./ProductsList"
import OrdersList from "./OrdersList"
import AddNewProduct from "./AddNewProduct"

function Adminscreen() {
  return (
    <>
      <h1>Admin Screen</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
            <ul className='admin'>
                <li><Link to='/admin/userslist' style={{color:'black'}}>Users List</Link></li>
                <li><Link to='/admin/productslist' style={{color:'black'}}>Products List</Link></li>
                <li><Link to='/admin/addnewproduct' style={{color:'black'}}>Add New Product</Link></li>
                <li><Link to='/admin/orderslist' style={{color:'black'}}>Orders List</Link></li>
            </ul>
          
            <Routes>
            <Route path="userslist" element={<UsersList />} />
            <Route path="productslist" element={<ProductsList />} />
            <Route path="addnewproduct" element={<AddNewProduct />}/>
            <Route path="orderslist" element={<OrdersList />} />
          </Routes>
          
           
        </div>
      </div>
    </>
  )
}

export default Adminscreen