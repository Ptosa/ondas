import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import ApplicationForm from '../pages/ApplicationForm/ApplicationForm';
import Admin from '../pages/Admin/Admin';
import Checkin from '../pages/Checkin/Checkin';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/ondas/" element={<Home />} />
        {/* <Route path="/ondas/ficha-de-inscricao" element={<ApplicationForm />} /> */}
        <Route path="/ondas/admin" element={<Admin />} />
        <Route path="/ondas/checkin" element={<Checkin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
