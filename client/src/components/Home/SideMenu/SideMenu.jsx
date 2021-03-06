import React from 'react';
import { ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';

import './SideMenu.css';

const SideMenu = () => {
  return (
    <div id="SideMenu">
      <ButtonGroup vertical>
        <DropdownButton size="large" as={ButtonGroup} title="Manage Lists" id="bg-vertical-dropdown-1">
          <Dropdown.Item eventKey="add">Add List</Dropdown.Item>
          <Dropdown.Item eventKey="delete">Delete List</Dropdown.Item>
        </DropdownButton>
        <Button size="large">Stats</Button>
      </ButtonGroup>
    </div>
  );
};

export default SideMenu;


    // <div id="SideMenu">
    //   <h1>Side Menu</h1>
    //   <p>There's supposed to be a bunch of text here so I am currently just trying to fill up space and write as many words as I can possibly think of in order to fill up all this space, speaking of space, it's so vast isn't it? There's tons of cool pictures from the Hubble space telescope and I am even more excited for Webb telescope to start sending back all the craziest and most fascinating pictures from deep space. Well, I think this should probably be enough text by now, so bye!</p>
    // </div>