import React from 'react';

import Navbar from './Navbar/Search';
import Home from './Home/Home';

const App = () => {
  const [someState, setSomeState] = React.useState('');

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;