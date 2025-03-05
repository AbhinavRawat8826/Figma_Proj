import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Toaster } from 'react-hot-toast';

import Layout from './layout/Layout';
import Landing from './pages/Landing';
import SecondLandingPage from './pages/SecondLandingPage';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import userAtom from './atoms/userAtom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const user = useRecoilValue(userAtom);
  console.log(user);

  return (
    <Router>
      <Toaster position="bottom-center" reverseOrder={true} />

   
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/page2" element={<SecondLandingPage />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={user ? <DashBoard /> : <Navigate to="/login" />}
          />
        </Routes>
      </GoogleOAuthProvider>
    </Router>
  );
};

export default App;
