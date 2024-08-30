import React from 'react';
import Nav from './Nav';
import { ToastContainer } from 'react-toastify';

import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ToastNotification from './ToastNotification';

function Header() {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Nav />
 
      <ToastContainer />
    </div>
  );
}

export default Header;
