import React from 'react';
import Menu from '../Menu/Menu';
import SightWords from '../SightWords/SightWords';
import WordLists from '../WordLists/WordLists';
import Words from '../../data/sightwords.json';

const Content = ({contentType, menuCallback}) => {

  const selectContentComponent = () => {
    if (contentType === 'home') {
      return <Menu callback={menuCallback} />;
    } else if (contentType === 'words') {
      return <WordLists listA={Words.listA} listB={Words.listB} />;
    } else if (contentType === 'learn') {
      return <SightWords type={contentType} listA={Words.listA} listB={Words.listB} callback={menuCallback} />;
    } else if (contentType === 'practice') {
      return <SightWords type={contentType} listA={Words.listA} listB={Words.listB} callback={menuCallback} />;
    } else if (contentType === 'test') {
      return <SightWords type={contentType} listA={Words.listA} listB={Words.listB} callback={menuCallback} />;
    }
    //Fall back to Menu if state is bad
    return <Menu callback={menuCallback}/>;
  };

  return selectContentComponent();
};

export default Content;
