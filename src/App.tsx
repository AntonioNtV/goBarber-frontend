import React from 'react';
import GlobalSytle from './styles/global';

import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';
import { ToastContainer } from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <ToastContainer />
  </>
);

export default App;
