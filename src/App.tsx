import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import Footer from './components/footer/Footer';
import BusinessInfo from './pages/BusinessInfo';
import ContactDetails from './pages/ContactDetails';
import FinanceBasics from './pages/FinanceBasics';
import Industry from './pages/Industry';
import Policies from './pages/Policies';

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/industry" element={<Industry />} />
          <Route path="/business_information" element={<BusinessInfo />} />
          <Route path="/finance_basics" element={<FinanceBasics />} />
          <Route path="/contact_details" element={<ContactDetails />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="*" element={<Navigate to="/industry" replace />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
