import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AuthRoute from './AuthRoute';
import ApplicationPage from "../pages/ApplicationPage";
import MyApplicationsPage from "../pages/MyApplicationsPage";
import MenuPage from "../pages/MenuPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
       <Route exact path="/login" element={<LoginPage />} />
       <Route exact path="/sign-up" element={<SignUpPage />} />
       <Route element={<AuthRoute />}>
          <Route exact path="/" element={<MenuPage />} />
          <Route exact path="/new-application" element={<ApplicationPage />} />
          <Route exact path="/applications" element={<MyApplicationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
