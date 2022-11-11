import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Footer from './features/footer/Footer';
import QuoteForm from './features/form/QuoteForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Test</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/about" element={<QuoteForm />} />
            <Route path="/users" element={<QuoteForm />} />
            <Route path="/" element={<QuoteForm />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
