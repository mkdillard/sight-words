import React from 'react';
import Menu from '../Menu/Menu';
import SightWords from '../SightWords/SightWords';
import WordLists from '../WordLists/WordLists';
import Words from '../../data/sightwords.json';

const Content = ({contentType, menuCallback}) => {

  const selectContentComponent = (type) => {
    if (type === 'home') {
      return <Menu callback={menuCallback} />;
    } else if (type === 'words') {
      return <WordLists listA={Words.listA} listB={Words.listB} />;
    } else if (type === 'learn' || contentType === 'practice' || contentType === 'test') {
      return <SightWords type={type} listA={Words.listA} listB={Words.listB} callback={menuCallback} />;
    }
    //Fall back to Menu if state is bad
    return <Menu callback={menuCallback}/>;
  };

  return (
    selectContentComponent(contentType)
  );
};

export default Content;
