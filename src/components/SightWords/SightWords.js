import React from 'react';
import MenuButton from '../Menu/MenuButton';

import './SightWords.css';

const SightWords = ({type, listA, listB}) => {
  const selectSightWordsDescription = () => {
    if (type === 'learn') {
      return (
        <p>

        </p>
      );
    } else if (type === 'practice') {
      return (
        <p>

        </p>
      );
    } else if (type === 'test') {
      return (
        <p>

        </p>
      );
    }
    return ( //assume learn
      <p>

      </p>
    );
  }
  return (
      <div className='sight-words-menu'>
        <h1>{type}</h1>
        <div className='pWrapper'>
          <p>
            Practice your sight words for the Powder Springs Elementary kindergarden
            class.<br />
            Please choose one of the options below to get started.
          </p>
        </div>
      </div>
  );
}

export default SightWords;
