import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from "../actions/userActions"

function Navbar() {
  const dispatch = useDispatch();
  const cartReducer = useSelector(state=>state.cartReducer)
  const { cartItems } = useSelector((state) => state.cart);
  // console.log("Updated cart items:", cartItems);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
const logoutHandler = () => {
  dispatch(logoutUser()); // Call the asynchronous action
    
};

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          W SHOP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
          {currentUser ? (<>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {currentUser.name}
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a className="dropdown-item" href="/profile">Profile</a>
             <a className="dropdown-item" href="/orders">Orders</a>
             <li className="dropdown-item" href="/logout" onClick={logoutHandler}>Logout</li>
             {/* <li className="dropdown-item" href="/logout" onClick={()=>{dispatch(logoutUser)}}>Logout</li> */}
            </div>
            </div>
          </>) : (
            <li><a className="nav-link" href="/login">Login</a></li>
            // <div className="dropdown">
            //   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //   {/* {currentUser.name} */} Button
            //   </button>
            // <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //  <a className="dropdown-item" href="/profile">Profile</a>
            //  <a className="dropdown-item" href="/orders">Orders</a>
            //  <a className="dropdown-item" href="/logout">Logout</a>
            // </div>
            // </div>
          )}
          <li className="nav-item">
              <a className="nav-link" href="/cart">
              <i className="fas fa-shopping-cart"></i>{cartItems.length}
                
              </a>
            </li>
          </div>
          
            
            
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
