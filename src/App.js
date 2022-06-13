import './App.css';
import PayrollForm from './components/payroll-from/payroll-form';
import Header from "./components/header/Header";
import PayrollDashboard from './components/payroll-dashboard/payroll-dashboard';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/payroll-dashboard" element={<PayrollDashboard />} />
            <Route path="/payroll-form" element={<PayrollForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
