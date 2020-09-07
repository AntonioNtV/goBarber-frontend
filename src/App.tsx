import React from 'react';
import GlobalSytle from './styles/global';

import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';

import AppProvider from './hooks';
import { ToastContainer } from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <AppProvider>
      <Signin />
    </AppProvider>
    <ToastContainer />
  </>
);

export default App;
