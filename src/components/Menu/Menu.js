import React from 'react';
import MenuButton from './MenuButton';
import './Menu.css';

const Menu = ({styleClass, callback}) => (
  <div  className={`menu ${styleClass}`}>
    <h1>Sight Words Practice</h1>
    <div className='pWrapper'>
      <p>
        Practice your sight words for the Powder Springs Elementary kindergarden
        class.<br />
        Please choose one of the options below to get started.
      </p>
    </div>
    <MenuButton
      name={'Words'} description={'View the word lists'} cb={callback}
    />
    <MenuButton
      name={'Learn'} description={'No time limits'} cb={callback}
    />
    <MenuButton
      name={'Practice'} description={'10 second time limit'} cb={callback} />
    <MenuButton
      name={'Test'} description={'3 second time limit'} cb={callback}
    />
  </div>
);

export default Menu;
