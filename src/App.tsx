import React from 'react';
import GlobalSytle from './styles/global';

import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <Signup />
  </>
);

export default App;
