import React from 'react';
import Menu from '../Menu/Menu';
import SightWords from '../SightWords/SightWords';
import WordLists from '../WordLists/WordLists';

const Content = ({contentType, menuCallback}) => {

  const selectContentComponent = () => {
    if (contentType === 'menu') {
      return <Menu callback={menuCallback}/>;
    } else if (contentType === 'words') {
      return <WordLists type={contentType} />;
    } else if (contentType === 'learn') {
      return <SightWords type={contentType} />;
    } else if (contentType === 'practice') {
      return <SightWords type={contentType} />;
    } else if (contentType === 'test') {
      return <SightWords type={contentType} />;
    }
    //Fall back to Menu if state is bad
    return <Menu callback={menuCallback}/>;
  };

  return selectContentComponent(contentType);
};

export default Content;
