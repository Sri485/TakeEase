import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import SignupPage from '../SignupPage';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import FindRiderPage from '../FindRiderPage/FindRiderPage';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/find-rider" element={<FindRiderPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
