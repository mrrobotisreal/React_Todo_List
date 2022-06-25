import React from 'react';

import './Home.css';
import SideMenu from './SideMenu/SideMenu';
import Tasks from './Tasks/Tasks';

const Home = () => {
  return (
    <div className="Home" style={{display: 'flex', flexDirection: 'row', border: '4px solid red', flex: '1', height: '94vh', width: '100vw'}}>
      <SideMenu />
      <Tasks />
    </div>
  );
};

export default Home;