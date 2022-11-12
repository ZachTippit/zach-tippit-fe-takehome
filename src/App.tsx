import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Footer from './features/footer/Footer';
import BusinessInfo from './features/form/BusinessInfo';
import ContactDetails from './features/form/ContactDetails';
import FinanceBasics from './features/form/FinanceBasics';
import Industry from './features/form/Industry';
import Policies from './features/form/Policies';

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
