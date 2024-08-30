import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './Pages/Home_page';
import AboutUsPage from './pages/About_page';
import ContactUsPage from './pages/Contact_page';
import User from './Pages/User_page';
import Login_d from './Pages/Login_d';
import Doctor from './Pages/Doctor_page';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/login_d" element={<Login_d/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
