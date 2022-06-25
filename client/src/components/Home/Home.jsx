import React from 'react';

import './Home.css';
import SideMenu from './SideMenu/SideMenu';
import Tasks from './Tasks/Tasks';

const Home = () => {
  return (
    <div id="Home" >
      <SideMenu />
      <Tasks />
    </div>
  );
};

export default Home;
