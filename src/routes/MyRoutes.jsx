import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import ApplicationForm from '../pages/ApplicationForm/ApplicationForm';
import Admin from '../pages/Admin/Admin';
import CheckinForm from '../pages/CheckinForm/CheckinForm';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import FindPeopleChamada from '../pages/FindPeopleChamada/FindPeopleChamada';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/ondas/" element={<Home />} />
        {/* <Route path="/ondas/ficha-de-inscricao" element={<ApplicationForm />} /> */}
        <Route path="/ondas/admin" element={<Admin />} />
        <Route path="/ondas/checkin" element={<CheckinForm />} />
        <Route path="/ondas/cadastro" element={<RegisterForm />} />
        <Route
          path="/ondas/buscarPessoasChamada"
          element={<FindPeopleChamada />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
