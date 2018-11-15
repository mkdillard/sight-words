import React from 'react';
import './SightWords.css';

export const WordBoxButton = ({type, word}) => {
  return (
    <div className='word-box'>
      <h1>{word}</h1>
    </div>
  );
};

export const WordBoxTimer = ({type, word, updateWord, updateWordParam}) => {
  updateWord(updateWordParam);
  return (
    <div className='word-box'>
      <h1>{word}</h1>
    </div>
  );
};

export default WordBoxButton;
