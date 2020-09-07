import React from 'react';
import GlobalSytle from './styles/global';

import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <AuthProvider>
      <Signin />
    </AuthProvider>
  </>
);

export default App;
