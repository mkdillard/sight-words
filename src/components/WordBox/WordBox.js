import React from 'react';
import './WordBox.css';

export const WordBox = ({word}) => {
  return (
    <div className='wordBoxWrapper'>
      <p>{word}</p>
    </div>
  );
};

export const WordBoxTimer = ({word, updateWord}) => {
  updateWord();
  return(
    <div className='wordBoxWrapper'>
      <p>{word}</p>
    </div>
  );
};

export default WordBox;
