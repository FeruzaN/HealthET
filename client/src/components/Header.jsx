import Nav from './Nav';
import { ToastContainer } from 'react-toastify';
import { FaHome, FaUserMd, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Left Side - Navigation */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2 hover:text-gray-200">
          <FaHome className="text-xl" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <Nav />
      </div>

      {/* Right Side - User and Doctor Tabs */}
      <div className="flex items-center space-x-6">
        <Link to="/doctor" className="flex items-center space-x-2 hover:text-gray-200">
          <FaUserMd className="text-xl" />
          <span className="hidden sm:inline">Doctor</span>
        </Link>
        <Link to="/user" className="flex items-center space-x-2 hover:text-gray-200">
          <FaUser className="text-xl" />
          <span className="hidden sm:inline">User</span>
        </Link>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </header>
  );
}

export default Header;
